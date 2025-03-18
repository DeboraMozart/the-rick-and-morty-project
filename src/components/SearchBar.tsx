"use client"
import React from "react";
import { CiSearch } from "react-icons/ci";
import AsideMenuButton from "./AsideMenuButton";

export default function SearchBar() {
  return (
    <div className="flex justify-between bg-slate-900 mt-2 p-3">
      <AsideMenuButton />
      <h1 className="text-white text-2xl flex items-center ">Rick and Morty</h1>
      <button>
        <CiSearch size={25} className="text-white" />
      </button>
    </div>
  );
}
