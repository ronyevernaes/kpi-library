'use client';

import { FC, useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import debounce from "debounce";

import { InputText } from "@/src/components/ui";

export const SearchInput: FC = () => {
  const [search, setSearch] = useState<string>("");
  const searchParams = useSearchParams();
  const router = useRouter();

  const debouncedSearch = useMemo(() => debounce((searchString) => {
    const params = new URLSearchParams(searchParams.toString());

    if (searchString) {
      params.set("search", searchString);
    } else {
      params.delete("search");
    }

    router.push(`/?${params.toString()}`);
  }, 300), [router, searchParams]);

  useEffect(() => {
    debouncedSearch(search);
  }, [debouncedSearch, search]);

  return (
    <InputText
      placeholder="Type to search..."
      value={search} onChange={(e) => setSearch(e.target.value)}
    />
  );
};
