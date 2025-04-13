"use client";
import { useData } from "@/hooks/useData";
import { DataContext } from "./DataContext";
import { Children, useState } from "react";
import { useSearch } from "@/hooks/useSearch";

export const DataProvider = ({ children }: { children: React.ReactNode }) => {
  const [page, setPage] = useState(1);
  const [searchItem, setSearchItem] = useState("");
  const { infoEpisodes, infoCharacters } = useData(page);

  return (
    <DataContext.Provider
      value={{ infoEpisodes, infoCharacters, searchItem, setSearchItem, page, setPage }}
    >
      {children}
    </DataContext.Provider>
  );
};
