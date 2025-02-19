"use client";
import { useData } from "@/hooks/useData";
import { DataContext } from "./DataContext";
import { Children } from "react";

export const DataProvider = ({ children }: { children: React.ReactNode }) => {
  const { fetchEpisodes, nameEpisodes } = useData();
  return (
    <DataContext.Provider value={{ fetchEpisodes, nameEpisodes }}>
      {children}
    </DataContext.Provider>
  );
};
