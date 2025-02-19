"use client"
import { createContext, useContext } from "react"

interface DataContextType {
    fetchEpisodes: () => Promise<void>;
    nameEpisodes: string
}

export const DataContext = createContext<DataContextType | undefined>(undefined); 

export const useFetchContent = () => {
    const context = useContext(DataContext);
    if(!context){
        throw new Error("UseFetchContex must be in a DataProvider");
    }
    return context;
}