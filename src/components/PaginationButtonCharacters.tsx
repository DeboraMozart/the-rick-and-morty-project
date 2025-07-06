"use client";
import React from "react";
import { MdNavigateBefore } from "react-icons/md";
import { MdNavigateNext } from "react-icons/md";
import { useFetchContent } from "@/context/DataContext";


export default function PaginationButtonCharacters() {
  const { charactersPage, setCharactersPage } = useFetchContent();

  return (
    <div className="flex w-96 justify-around mt-9 mb-6">
      <button
        className="w-24 h-9 bg-white border-solid border-2 flex justify-center items-center rounded-md motion-safe:hover:scale-105 disabled:opacity-50 disabled:hover:scale-100"
        onClick={() => {
          setCharactersPage(charactersPage - 1);
        }}
        disabled={charactersPage < 2}
      >
        <MdNavigateBefore />
      </button>
      <span className="text-white">{charactersPage}</span>
      <button
        className={`w-24 h-9 bg-white border-solid border-2 flex justify-center items-center rounded-md motion-safe:hover:scale-105 disabled:opacity-50 disabled:hover:scale-100`}
        onClick={() => {
          setCharactersPage(charactersPage + 1);
        }}
        disabled={charactersPage === 3}
      >
        <MdNavigateNext />
      </button>
    </div>
  );
}
