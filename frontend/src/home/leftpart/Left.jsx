import React from "react";
import Search from "./Search";
import Users from "./Users";
import Logout from "./logout";

const Left = () => {
  return <div className="w-[30%]  bg-black text-gray-300">
    <Search></Search>
    <div className="flex-1 overflow-y-auto" style={{minHeight:"calc(84vh - 10vh)"}}>
      <Users/>
    </div>
    <Logout></Logout>
  </div>;
};

export default Left;