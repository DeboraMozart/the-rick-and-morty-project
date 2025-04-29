"use client";

import { useFetchContent } from "@/context/DataContext";
import { useState } from "react";
import { useEffect } from "react";

interface Episodes {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: string;
}

export const useSearch = () => {
  const { searchItem, infoEpisodes, infoCharacters, allEpisodes } = useFetchContent();
 // const [episodes, setEpisodes] = useState<Episodes[]>([]);


  // const getEpisodes = async (query: string) => {
  //   try {
  //     const response = await fetch(`https://rickandmortyapi.com/api/episode/?name=${query}`);
  //     if (!response.ok) {
  //       throw new Error("Error trying to fetch episodes");
  //     }

  //     const data = await response.json();
  //     setEpisodes(data.results);
  //   } catch (error) {
  //     console.log("You've got an ", error);
  //   }
  // };
  if (!infoEpisodes) {
    return [];
  }

  if (!searchItem || searchItem == "") {
    return infoEpisodes;
  }

  const filteredEp = allEpisodes.filter((episode) =>
    episode.name.toLowerCase().includes(searchItem.toLowerCase())
  );

  // const filteredCharacters = infoCharacters.filter((characters) => {
  //   characters.name.toLowerCase().includes(searchItem.toLowerCase());
  // });
  // useEffect(() => {
  // }, [searchItem]);
  return filteredEp;
};
