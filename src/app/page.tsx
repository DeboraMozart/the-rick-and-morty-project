"use client";
import { get } from "http";
import SearchBar from "@/components/SearchBar";

export default function Home() {

  return (
    <>
      <SearchBar />
      <h1 className="text-white text-xl mt-2 ml-5">Episodes</h1>
      <div className="grid grid-cols-2 gap-4 justify-between">
      </div>
    </>
  );
}
