import React from "react";
import { useFetchContent } from "@/context/DataContext";
export default function InputSearchItem() {
  const { setSearchItem } = useFetchContent();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchItem(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        className="h-7 rounded-sm bg-slate-500 text-white border-2"
        onChange={handleChange}
      />
    </div>
  );
}