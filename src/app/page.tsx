"use client";
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
      <div className="flex items-center">
        <h1 className="text-white text-xl mt-2 ml-5">Episodes</h1>
        {currentInfoEpisodes.map((info) => {
          return (
            <section
              className="w-auto grid grid-rows-3 grid-flow-col gap-4"
              key={info.id}
            >
              <div>
                <div className="w-10 h-10 bg-black"></div>
                <h1 className="text-white">{info.name}</h1>
              </div>
            </section>
          );
        })}
      </div>
    </>
  );
}
