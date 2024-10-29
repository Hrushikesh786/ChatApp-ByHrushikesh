import React from "react";
import useConversation from "../../zustand/useConversation.js";

const Chatuser = () => {
  const {selectedConversation}=useConversation()
  console.log(selectedConversation);
  
  return (
    <div className="flex items-center justify-center space-x-3 py-8 bg-gray-800 hover:bg-gray-700 duration-3 h-[8vh]">
      <div className="avatar online ">
        <div className="w-16 rounded-full">
          <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      <div className="">
        <h1 className="text-xl">{selectedConversation.fullname}</h1>
        <span className="text-sm">Offline</span>
      </div>
    </div>
  );
};

export default Chatuser;
