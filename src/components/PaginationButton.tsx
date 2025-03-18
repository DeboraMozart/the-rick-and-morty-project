"use client";
import React from "react";
import { MdNavigateBefore } from "react-icons/md";
import { MdNavigateNext } from "react-icons/md";
import { useFetchContent } from "@/context/DataContext";

export default function PaginationButton() {
  const { page, setPage } = useFetchContent();

  return (
    <div className="flex w-96 justify-around mt-9 mb-6">
      <button
        className="w-24 h-9 bg-white border-solid border-2 flex justify-center items-center rounded-md motion-safe:hover:scale-105 disabled:opacity-50 disabled:hover:scale-100"
        onClick={() => {
          setPage(page - 1);
        }}
        disabled={page < 2}
      >
        <MdNavigateBefore />
      </button>
      <button
        className={`w-24 h-9 bg-white border-solid border-2 flex justify-center items-center rounded-md motion-safe:hover:scale-105 disabled:opacity-50 disabled:hover:scale-100`}
        onClick={() => {
          setPage(page + 1);
        }}
        disabled={page === 3}
      >
        <MdNavigateNext />
      </button>
    </div>
  );
}
