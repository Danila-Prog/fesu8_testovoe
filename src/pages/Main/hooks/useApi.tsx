import { useCallback, useEffect, useState } from "react";
import { BASE_URL } from "../lib/const";

interface IApi {
  id: number;
  name: string;
  status: string;
  created: string;
  url: string;
}

interface ApiResponce {
  info: {
    pages: number;
  };
  results: IApi[];
}

export const useApi = (value: string) => {
  const [valueApi, setValueApi] = useState<IApi[]>([]);

  const fetchCharacter = useCallback(async (signal: AbortSignal) => {
    try {
      let page = 1;
      let totalPage = 1;

      while (page <= totalPage) {
        const res = await fetch(`${BASE_URL}${page}`, { signal });

        if (!res.ok) throw new Error("Network response was not ok");

        const data: ApiResponce = await res.json();
        setValueApi((prev) => [...prev, ...data.results]);
        totalPage = data.info.pages;
        page++;
      }
    } catch (error: unknown) {
      if (error instanceof Error && error.name !== "AbortError") {
        console.error("Fetch error:", error);
      }
    }
  }, []);

  useEffect(() => {
    const abortController = new AbortController();

    if (value.length === 3) {
      fetchCharacter(abortController.signal);
    }

    return () => abortController.abort("Abort controlled called");
  }, [value.length, fetchCharacter]);

  const filterApi = valueApi.filter((el) =>
    el.name.toLowerCase().includes(value.toLowerCase())
  );

  return { filterApi };
};
