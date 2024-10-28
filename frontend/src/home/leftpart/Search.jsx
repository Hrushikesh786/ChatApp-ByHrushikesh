import React from "react";
import { FaSearch } from "react-icons/fa";

const Search = () => {
  return (
    <div className="h-[10vh] mb-2">
      <div className="px-6 py-4">
      <form action="">
        <div className=" flex space-x-3">
          <label className="bg-slate-900 border-[1px] border-gray-500 rounded-lg  flex w-[80%] items-center gap-2">
            <input type="text" className="px-5 bg-slate-900  grow outline-none" placeholder="Search" />
          </label>
         <button >
          <FaSearch className="text-5xl p-2 hover:bg-gray-900 duration-1 rounded-full"/>
         </button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default Search;
