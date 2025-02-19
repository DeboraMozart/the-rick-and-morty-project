"use client";
import { useEffect } from "react";
import { get } from "http";
import SearchBar from "@/components/SearchBar";
import { useFetchContent } from "@/context/DataContext";
export default function Home() {
  const { fetchEpisodes, nameEpisodes } = useFetchContent();
  useEffect(() => {
    fetchEpisodes();
  }, []);
  console.log(fetchEpisodes);
  console.log(nameEpisodes);
  return (
    <>
      <SearchBar />
      <h1 className="text-white text-xl mt-2 ml-5">Episodes</h1>
      <h1 className="text-white">{nameEpisodes.name}</h1>
      <div className="grid grid-cols-2 gap-4 justify-between"></div>
    </>
  );
}
