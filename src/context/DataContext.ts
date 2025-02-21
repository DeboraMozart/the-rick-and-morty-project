"use client"
import { createContext, useContext } from "react"

interface Episodes {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: string;
}

interface DataContextType {
    fetchEpisodes: () => Promise<void>;
    infoEpisodes: Episodes[];
}

export const DataContext = createContext<DataContextType | undefined>(undefined); 

export const useFetchContent = () => {
    const context = useContext(DataContext);
    if(!context){
        throw new Error("UseFetchContext must be in a DataProvider");
    }
    return context;
}