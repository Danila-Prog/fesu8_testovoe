import { useState } from "react";
import { ListCard } from "./ui/ListCard";
import { SearchBarWithResults } from "./ui/SearchBarWithResults";

export const Main = () => {
  const [value, setValue] = useState<string>("");
  return (
    <main>
      <SearchBarWithResults value={value} setValue={setValue} />
      <ListCard value={value} />
    </main>
  );
};
