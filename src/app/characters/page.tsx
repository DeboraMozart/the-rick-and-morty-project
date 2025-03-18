"use client";
import { useFetchContent } from "@/context/DataContext";
import PaginationButton from "@/components/PaginationButton";
import React from "react";
import Image from "next/image";

export default function CharactersPage() {
  const { infoCharacters } = useFetchContent();

  if (!infoCharacters || infoCharacters.length === 0) {
    return <p className="text-white">Loading...</p>;
  }
  const currentCharacters = infoCharacters;

  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-white text-xl mt-5 mb-5 ml-5">Characters</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {currentCharacters.map((info) => {
            return (
              <div
                key={info.id}
                className="flex justify-center hover:cursor-pointer transform motion-safe:hover:scale-105 sm:motion-safe"
              >
                <div className="flex w-96 mb-10 bg-slate-500 rounded-md hover:cursor-pointer text-white">
                  <Image
                    src={info.image}
                    width={150}
                    height={130}
                    alt={info.name}
                    className=""
                  />
                  <div className="flex flex-col ml-4 pb-2">
                    <h1 className="text-white font-black w-full text-xl">
                      {info.name}
                    </h1>
                    <p
                      className={`font-semibold text-sm ${
                        info.status === "Dead" ? "text-red-400" : "text-green-300"
                      }`}
                    >
                      {info.status} - {info.species}
                    </p>
                    <p className="text-gray-400 font-semibold text-sm">
                      Origin:
                    </p>
                    <p className="text-sm">{info.origin.name}</p>
                    <p className="text-gray-400 font-semibold text-sm">
                      Last known location:
                    </p>
                    <p className="text-sm">{info.location.name}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <PaginationButton />
      </div>
    </div>
  );
}
