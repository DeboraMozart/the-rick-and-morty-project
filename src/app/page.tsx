"use client";
import { useEffect } from "react";
import SearchBar from "@/components/SearchBar";
import { useFetchContent } from "@/context/DataContext";

export default function Home() {
  const { infoEpisodes } = useFetchContent();

  if (!infoEpisodes || infoEpisodes.length === 0) {
    return <p className="text-white">Loading...</p>;
  }

  const currentInfoEpisodes = infoEpisodes;
  return (
    <>
      <SearchBar />
      {currentInfoEpisodes.map(info)=>{return (
        <section>
          <h1 className="text-white text-xl mt-2 ml-5">Episodes</h1>
                <h1 className="text-white">{info.name}</h1>
                <div className="grid grid-cols-2 gap-4 justify-between"></div>
        </section>)}}
    </>
  );
}
