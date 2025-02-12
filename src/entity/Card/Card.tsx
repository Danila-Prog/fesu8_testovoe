import style from "./Card.module.scss";

interface ICard {
  name: string;
  status: string;
  created: string;
  index: number;
}

export const Card = ({ name, status, created, index }: ICard) => {
  const statusColor = {
    Alive: "#267504",
    Dead: "#820A0A",
  }[status];
  return (
    <article className={index < 2 ? style.cardHeader : style.normalCard}>
      <h1>{name}</h1>
      <div className={style.infoCard}>
        <span>
          Status:{" "}
          <span style={{ color: statusColor, fontWeight: "700" }}>
            {status}
          </span>
        </span>
        <span className={style.created}>Created: {created}</span>
      </div>
    </article>
  );
};
