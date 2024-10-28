import React from "react";
import Chatuser from "./Chatuser";
import Messages from "./Messages";
import Typesend from "./Typesend";

const Right = () => {
  return <div className="w-[70%] bg-gray-900 text-white ">
    <Chatuser/>
    <div className="flex-1 overflow-y-auto" style={{maxHeight:"calc(92vh - 8vh)"}}>
      <Messages/>
    </div>
    <Typesend/>
  </div>;
};

export default Right;
