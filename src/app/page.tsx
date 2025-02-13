"use client";
import { get } from "http";
import { useState } from "react";
export default function Home() {
  const [episode, setEpisode] = useState<string>("");
  const getEpisodes = async () => {
    const response = await fetch("https://rickandmortyapi.com/api/episode");
    const ep = await response.json();
    setEpisode(ep.results[3].name);

    console.log(episode);
  };
  return (
    <>
      <h1>aqui {episode}</h1>
      <button onClick={getEpisodes}>click me</button>
    </>
  );
}
