"use client";
import { useFetchContent } from "@/context/DataContext";
import { BsPlayCircle } from "react-icons/bs";
import { useSearch } from "@/hooks/useSearch";
import PaginationButtonHome from "@/components/PaginationButtonHome";

export default function Home() {
  const { infoEpisodes } = useFetchContent();
  const { filteredEp }  = useSearch(); 
  

  if (!infoEpisodes || infoEpisodes.length === 0) {
    return <p className="text-white">Loading...</p>;
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-white text-xl mt-5 mb-5 ml-5">Episodes</h1>
        <div className="grid grid-cols-2 gap-y-8 md:gap-x-40 place-items-center w-full max-w-lg mx-auto">
          {filteredEp.map((info) => ( 
            <div key={info.id} className="flex justify-center ">
              <div className="flex flex-col items-center min-h-[200px] w-full ">
                <div
                  className="w-44 h-36 rounded-xl   flex items-center justify-center bg-contain bg-no-repeat bg-background-ep hover:cursor-pointer transform motion-safe:hover:scale-105 sm:motion-safe"
                >
                  <BsPlayCircle color="white" size={40} />
                </div>
                <h1 className="text-white mt-2 text-center w-full px-2">
                  {info.episode} {info.name}
                </h1>
              </div>
            </div>
          ))}
        </div>
        <PaginationButtonHome />
      </div>
    </>
  );
}