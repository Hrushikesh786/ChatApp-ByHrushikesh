import { createTokenAndSaveCookie } from "../jwt/generateToken.js";
import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

export const signup = async (req, res) => {
  const { fullname, email, password, confirmPassword } = req.body;
  try {
    if (password !== confirmPassword) {
      return res.status(400).json({ error: "password do not match" });
    }
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ error: "User already exists" });
    }
    //password hashing
    const hashPassword = await bcrypt.hash(password, 10);
    const newUser = await new User({
      fullname,
      email,
      password: hashPassword,
    });
    await newUser.save();
    if (newUser) {
      createTokenAndSaveCookie(newUser._id, res);
      return res
        .status(201)
        .json({ message: "User registered Successfully",
           user:{
          _id:newUser._id,
          fullname:newUser.fullname,
          email:newUser.email
      } });
    }
  } catch (error) {
    console.log("Error:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email }).select("+password");
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(400).json({ error: "Invalid email or password" });
    }
    const token = await createTokenAndSaveCookie(user._id, res);
    res
      .status(200)
      .json({ message: "User logged in successfully", token ,
        user:{
          _id:user._id,
          fullname:user.fullname,
          email:user.email
      } });
  } catch (error) {
    console.log("Error:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
export const logout=(req,res)=>{
  try {
    res.clearCookie("jwt")
    res
      .status(200)
      .json({ message: "User logged Out in successfully" });
  } catch (error) {
    console.log("Error:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

export const allUsers=async(req,res)=>{
  try {
    const loggedInUser=req.user._id
    const filteredUsers=await User.find({_id:{$ne:loggedInUser}}).select("-password");
    res
    .status(201)
    .json(filteredUsers )
  } catch (error) {
    console.log("Error in allUsers controller:",error)
  }
}