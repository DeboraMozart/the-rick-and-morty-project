"use client";
import { useData } from "@/hooks/useData";
import { DataContext } from "./DataContext";
import { useState } from "react";

export const DataProvider = ({ children }: { children: React.ReactNode }) => {
  const [homePage, setHomePage] = useState(1);
  const [charactersPage, setCharactersPage] = useState(1);
  const [searchItem, setSearchItem] = useState("");
  const { infoEpisodes, infoCharacters, allEpisodes, allCharacters } = useData(homePage, charactersPage);

  return (
    <DataContext.Provider
      value={{ infoEpisodes, allEpisodes, infoCharacters, allCharacters, searchItem, setSearchItem, homePage, setHomePage, charactersPage,   setCharactersPage}}
    >
      {children}
    </DataContext.Provider>
  );
};
