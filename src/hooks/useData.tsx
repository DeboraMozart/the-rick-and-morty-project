"use client";

import { useState, useEffect } from "react";
interface Episodes {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: string;
}

export const useData = () => {
  const [infoEpisodes, setInfoEpisodes] = useState<Episodes[]>([]);
  const fetchEpisodes = async () => {
    try {
      const response = await fetch("https://rickandmortyapi.com/api/episode");
      if (!response.ok) {
        throw new Error("Error trying to fetch episodes");
      }
      const data = response.json();

      setInfoEpisodes(data.);
      if (response.ok) {
        setNameEpisode(newData);
        console.log("fine");
      } else {
        console.log("Error trying to fetch episode name");
      }
    } catch (err) {
      console.log("You've got an ", err);
    }
  };

  //const fetchCharacters = async () => {};
  return {
    fetchEpisodes,
    nameEpisodes,
  };
};
