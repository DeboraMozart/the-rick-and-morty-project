"use client";
import SearchBar from "@/components/SearchBar";
import { useFetchContent } from "@/context/DataContext";
import { BsPlayCircle } from "react-icons/bs";
export default function Home() {
  const { infoEpisodes } = useFetchContent();

  if (!infoEpisodes || infoEpisodes.length === 0) {
    return <p className="text-white">Loading...</p>;
  }

  const currentInfoEpisodes = infoEpisodes;
  return (
    <>
      <SearchBar />
      <div className="flex flex-col items-center">
        <h1 className="text-white text-xl mt-2 mb-2 ml-5">Episodes</h1>
        <div className="grid grid-cols-2 gap-4">
          {currentInfoEpisodes.map((info) => {
            return (
              <div key={info.id}>
                <div>
                  <div className="w-44
                   h-36 bg-black hover:cursor-pointer flex items-center justify-center"><BsPlayCircle color="white" size={40}/></div>
                  <h1 className="text-white mt-2 flex flex-col">Episode{info.episode}{info.name}</h1>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
