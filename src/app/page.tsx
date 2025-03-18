"use client";
import SearchBar from "@/components/SearchBar";
import { useFetchContent } from "@/context/DataContext";
import { BsPlayCircle } from "react-icons/bs";
import PaginationButton from "@/components/PaginationButton";
export default function Home() {
  const { infoEpisodes } = useFetchContent();

  if (!infoEpisodes || infoEpisodes.length === 0) {
    return <p className="text-white">Loading...</p>;
  }

  const currentInfoEpisodes = infoEpisodes;
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-white text-xl mt-5 mb-5 ml-5">Episodes</h1>
        <div className="grid grid-cols-2 gap-y-8 md:gap-x-40 place-items-center w-full max-w-lg mx-auto">
  {currentInfoEpisodes.map((info) => {
    return (
      <div key={info.id} className="flex justify-center">
        <div className="flex flex-col items-center min-h-[200px] w-full">
          <div
            className="w-44 h-36 rounded-xl bg-black flex items-center justify-center hover:bg-slate-900 cursor-pointer transform motion-safe:hover:scale-105 sm:motion-safe:hover:animate-spin"
          >
            <BsPlayCircle color="white" size={40} />
          </div>
          <h1 className="text-white mt-2 text-center w-full px-2">
            {info.episode} {info.name}
          </h1>
        </div>
      </div>
    );
  })}
</div>

        <PaginationButton />
      </div>
    </>
  );
}