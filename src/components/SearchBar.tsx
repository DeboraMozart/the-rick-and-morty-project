import React from "react";
import { CiSearch } from "react-icons/ci";
import { VscThreeBars } from "react-icons/vsc";
export default function SearchBar() {
  return (
    <div className="flex justify-between bg-slate-900 mt-2 p-3">
      <button className="bg-slate-700 w-10 h-10 flex justify-center items-center">
        <VscThreeBars size={25} className="text-white" />
      </button>
      <h1 className="text-white text-2xl flex items-center ">Rick and Morty</h1>
      <button>
        <CiSearch size={25} className="text-white" />
      </button>
    </div>
  );
}
