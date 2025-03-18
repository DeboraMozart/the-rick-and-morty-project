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

interface Characters {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
}

interface CharactersResponse {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: Characters[];
}

export const useData = (page: number) => {
  const [infoEpisodes, setInfoEpisodes] = useState<Episodes[]>([]);
  const [infoCharacters, setInfoCharacters] = useState<Characters[]>([]);

  const fetchEpisodes = async () => {
    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/episode/?page=${page}`
      );
      if (!response.ok) {
        throw new Error("Error trying to fetch episodes");
      }
      const data = await response.json();

      setInfoEpisodes(data.results);
    } catch (error) {
      console.log("You've got an ", error);
    }
  };

  const fetchCharacters = async () => {
    try {
      const response = await fetch(
        "https://rickandmortyapi.com/api/character/"
      );
      if (!response.ok) {
        throw new Error("Error trying to fetch episodes");
      }

      const data: CharactersResponse = await response.json();
      setInfoCharacters(data.results);
    } catch (error) {
      console.log("You've got an ", error);
    }
  };
  useEffect(() => {
    fetchEpisodes();
    fetchCharacters();
  }, [page]);

  return {
    infoEpisodes,
    infoCharacters,
  };
};
