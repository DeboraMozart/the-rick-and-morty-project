"use client";
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import AsideMenuButton from "./AsideMenuButton";
import InputSearchItem from "./InputSearchItem";

export default function SearchBar() {
  const [showInput, setShowInput] = useState(false);
  return (
    <div >
      <div className="flex justify-between bg-slate-900 mt-2 p-3">
        <AsideMenuButton />
        <h1 className="text-white text-2xl flex items-center ">
          Rick and Morty
        </h1>

        <button  onClick={() => setShowInput(!showInput)}>
          <CiSearch size={25} className="text-white" />
        </button>
      </div> 
      {showInput && (<div className="flex justify-end mr-4 mt-2 gap-x-2  items-center">
        <button className="w-24 h-9 bg-white border-solid border-2 flex justify-center items-center rounded-md">search</button>
        <InputSearchItem />
      </div>)}
    </div>
  );
}
