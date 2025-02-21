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
      const data = await response.json();
    
      setInfoEpisodes(data.results);
      
    } catch (err) {
      console.log("You've got an ", err);
    }
  };
  useEffect(() => {
    fetchEpisodes();
  }, []);
  //const fetchCharacters = async () => {};
  return {
    fetchEpisodes,
    infoEpisodes
  };
};
