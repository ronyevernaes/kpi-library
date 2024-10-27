'use client';

import { FC } from "react";

import { InputText } from "@/src/components/ui";
import { useStore } from "@/src/store";

export const SearchInput: FC = () => {
  const { search, setSearch } = useStore();

  return (
    <InputText
      placeholder="Type to search..."
      value={search} onChange={(e) => setSearch(e.target.value)}
    />
  );
};
