"use client";
import { useData } from "@/hooks/useData";
import { DataContext } from "./DataContext";
import { Children, useState } from "react";

export const DataProvider = ({ children }: { children: React.ReactNode }) => {
 const [page, setPage] = useState(1);
  const {  infoEpisodes, infoCharacters } = useData(page);
  return (
    <DataContext.Provider value={{ infoEpisodes, infoCharacters, page, setPage }}>
      {children}
    </DataContext.Provider>
  );
};
