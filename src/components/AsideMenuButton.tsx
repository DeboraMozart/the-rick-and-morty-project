import React from "react";
import { useState, useEffect } from "react";
import { VscThreeBars } from "react-icons/vsc";
import { useRouter, usePathname } from "next/navigation";
export default function AsideMenuButton() {
  const router = useRouter();
  const pathname = usePathname();
  const [IsOpen, setIsOpen] = useState(false);
  const [classStyle, setClassStyle] = useState("");

  function setRoute(route: string) {
    router.push(`/${route}`);
    setClassStyle(route);
  }
  useEffect(() => {
    const currentRoute = pathname.slice(1);
    setClassStyle(currentRoute);
  }, [pathname]);

  return (
    <div>
      <button
        className="bg-slate-700 w-10 h-10 flex justify-center items-center"
        onClick={() => setIsOpen(!IsOpen)}
      >
        <VscThreeBars size={25} className="text-white" />
      </button>
      {IsOpen && (
        <div
          className=" bg-gray-600/50 text-xl min-h-screen w-full fixed top-0 left-0 right-0 z-10 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        >
          <div className="w-80 bg-gray-800 text-white fixed top-0 left-0 h-full transition-all duration-300 z-20">
            <div className="flex flex-col items-start pl-1 pt-4 gap-5">
              <button
                className={`flex items-start ${
                  classStyle === "" ? "bg-slate-500 w-full" : ""
                }`}
                onClick={() => {
                  setRoute("");
                }}
              >
                Home
              </button>
              <button
                className={`flex items-start ${
                  classStyle === "characters" ? "bg-slate-500 w-full" : ""
                }`}
                onClick={() => {
                  setRoute("characters");
                }}
              >
                Characters
              </button>
              <button
                className={`flex items-start ${
                  classStyle === "location" ? "bg-slate-500 w-full" : ""
                }`}
                onClick={() => {
                  setRoute("location");
                }}
              >
                Location
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
