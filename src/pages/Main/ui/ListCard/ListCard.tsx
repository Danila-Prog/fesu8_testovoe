import { Card } from "../../../../entity/Card";
import { useApi } from "../../hooks/useApi";
import style from "./ListCard.module.scss";

interface IListCard {
  value: string;
}
export const ListCard = ({ value }: IListCard) => {
  const { filterApi } = useApi(value);

  return (
    <ul className={style.listCard}>
      {filterApi.length && value.length
        ? filterApi.map((el, index) => {
            const date = new Date(el.created);
            const day = String(date.getDate()).padStart(2, "0");
            const month = String(date.getMonth()).padStart(2, "0");
            const year = date.getFullYear();

            return (
              <li key={el.id}>
                <a href={el.url} target="_blank">
                  <Card
                    name={el.name}
                    status={el.status}
                    created={`${day}.${month}.${year}`}
                    index={index}
                  />
                </a>
              </li>
            );
          })
        : ""}
    </ul>
  );
};
