"use client";
import { useData } from "@/hooks/";
import { DataContext } from "./DataContext";
import { Children } from "react";

export const DataProvider = ({ children }: { children: React.ReactNode }) => {
  const { fetchData } = useData();
  return (
    <DataContext.Provider value={{fetchData}}>{children}</DataContext.Provider>
  )
};
