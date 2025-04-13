"use client";

import { useFetchContent } from "@/context/DataContext";

export const useSearch = () => {
  const { searchItem, infoEpisodes } = useFetchContent();

  if (!infoEpisodes) {
    return []; 
  }

  if (!searchItem || searchItem == '') {
    return infoEpisodes; 
  }

  const filtered = infoEpisodes.filter((episode) =>
    episode.name.toLowerCase().includes(searchItem.toLowerCase())
  );

  return filtered;
};
