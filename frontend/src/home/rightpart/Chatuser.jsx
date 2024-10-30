import React from "react";
import useConversation from "../../zustand/useConversation.js";
import { useSocketContext } from "../../context/SocketContext.jsx";

const Chatuser = () => {
  const {selectedConversation}=useConversation()
  const{onlineUsers}=useSocketContext()
  const isOnline=onlineUsers.includes(selectedConversation._id)
  const getOnlineUsersStatus=(userId)=>{
    return onlineUsers.includes(userId)?"online":"offline"
  }
  
  return (
    <div className="flex items-center justify-center space-x-3 py-8 bg-gray-800 hover:bg-gray-700 duration-3 h-[8vh]">
      <div className={`avatar ${isOnline?"online":""}`}>
        <div className="w-16 rounded-full">
          <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      <div className="">
        <h1 className="text-xl">{selectedConversation.fullname}</h1>
        <span className="text-sm">{getOnlineUsersStatus(selectedConversation._id)}</span>
      </div>
    </div>
  );
};

export default Chatuser;
