import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";

export const sendMessage = async (req, res) => {
  // console.log("Message sent",req.params.id,req.body.message)
  try {
    const { message } = req.body;
    const { id: receiverId } = req.params;
    const senderId = req.user._id; //current logged in user
    let conversation = await Conversation.findOne({
      members: { $all: [senderId, receiverId] },
    });
    if (!conversation) {
      conversation = await Conversation.create({
        members: [senderId, receiverId],
      });
    }
    const newMessage = new Message({
      senderId,
      receiverId,
      message,
    });
    if (newMessage) {
      conversation.messages.push(newMessage._id);
    }
    // await conversation.save()
    // await newMessage.save()
    await Promise.all([conversation.save(), newMessage.save()]); //run parallel
    return res
      .status(201)
      .json({ message: "Message sent successfully", newMessage });
  } catch (error) {
    console.log("error in send message:", error);
    return res.status(401).json({ error: "Error in send message" });
  }
};

export const getMessage = async (req, res) => {
  // console.log("get messages",req)
  try {
    const { id: chatUser } = req.params;
    const senderId = req.user._id; //current logged in user
    let conversation = await Conversation.findOne({
      members: { $all: [senderId, chatUser] },
    }).populate("messages");
    if (!conversation) {
      return res.status(201).json([]);
    }
    const messages = conversation.messages;
    return res.status(201).json(messages);
  } catch (error) {
    console.log("error in get message:", error);
    return res.status(401).json({ error: "Error in get message" });
  }
};
