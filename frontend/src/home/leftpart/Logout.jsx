import React, { useState } from "react";
import { CiLogout } from "react-icons/ci";
import axios from "axios"
import Cookies from "js-cookie"

const Logout = () => {
  const[loading,setLoading]=useState(false)
  const handleLogout=async()=>{
    setLoading(true)
    try {
      const res=await axios.post("/api/user/logout")
      localStorage.removeItem("ChatApp")
      Cookies.remove("jwt")
      setLoading(false)
      alert("logout successfully")
      window.location.reload();
    } catch (error) {
      console.log("Error in logout:",error)
      
    }
  }
  return (
    <div className="h-[10vh]">
      <div>
        <CiLogout className="text-5xl text-white hover:bg-slate-700 duration-2 cursor-pointer rounded-full px-2 py-2 ml-2 mt-1" onClick={handleLogout}></CiLogout>
      </div>
    </div>
  );
};

export default Logout;
