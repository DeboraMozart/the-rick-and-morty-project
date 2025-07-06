"use client";

import { useFetchContent } from "@/context/DataContext";

export const useSearch = () => {
  const {
    searchItem,
    infoEpisodes,
    infoCharacters,
    allEpisodes,
    allCharacters,
  } = useFetchContent();
 
  if (!infoEpisodes || !infoCharacters) {
    return {
      filteredEp: [],
      filteredCharacters: [],
    };
  }

  if (!searchItem || searchItem === "") {
    return {
      filteredEp: infoEpisodes,
      filteredCharacters: infoCharacters
    };
  }
  const filteredEp = allEpisodes.filter((episode) =>
  episode.name.toLowerCase().includes(searchItem.toLowerCase())
);

const filteredCharacters = allCharacters.filter((character) =>
  character.name.toLowerCase().includes(searchItem.toLowerCase())
);

  return {
    filteredEp,
    filteredCharacters,
  };
};
