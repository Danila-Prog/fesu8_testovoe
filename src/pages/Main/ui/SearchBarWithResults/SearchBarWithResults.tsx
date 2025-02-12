import { useApi } from "../../hooks/useApi";
import { ChangeEvent } from "react";
import style from "./SearchBarWithResults.module.scss";

interface ISearchBarWithResults {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}
export const SearchBarWithResults = ({
  value,
  setValue,
}: ISearchBarWithResults) => {
  const { filterApi } = useApi(value);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return (
    <div className={style.searchContainer}>
      <input
        type="text"
        placeholder="Search characters..."
        autoFocus
        value={value}
        onChange={handleChange}
      />

      {value.length >= 3 ? <p>Found characters: {filterApi.length}</p> : ""}
    </div>
  );
};
