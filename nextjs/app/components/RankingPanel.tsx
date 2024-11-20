import { RankingItem } from "./RankingItem";
import styles from "./RankingPanel.module.css";

export function RankingPanel() {
  const items = [
    {
      ranking: 1,
      name: "S. Austin",
    },
    {
      ranking: 2,
      name: "S. Rene",
      interval: 7.999,
    },
    {
      ranking: 3,
      name: "A. Fons",
      interval: 2.345,
    },
    {
      ranking: 4,
      name: "M. Kristian",
      interval: 3.146,
    },
    {
      ranking: 5,
      name: "K. Maik",
      interval: 0.15,
    },
    {
      ranking: 6,
      name: "G. Freddie",
      interval: 8.557,
    },
    {
      ranking: 7,
      name: "R. Mateus",
      interval: 9.655,
    },
    {
      ranking: 8,
      name: "R. Miguel",
      interval: 13.452,
    },
    {
      ranking: 9,
      name: "S. Wiktor",
      interval: 0.879,
    },
    {
      ranking: 10,
      name: "O. Odín",
      interval: 9.657,
    },
    {
      ranking: 11,
      name: "F. Tain",
      interval: 14.548,
    },
    {
      ranking: 12,
      name: "F. Wang",
      interval: 5.568,
    },
    {
      ranking: 13,
      name: "K. David",
      interval: 3.241,
    },
    {
      ranking: 14,
      name: "W. Robert",
      interval: 3.135,
    },
    {
      ranking: 15,
      name: "A. Edward",
      interval: 4.689,
    },
    {
      ranking: 16,
      name: "G. Harry",
      interval: 10.015,
    },
  ];

  return (
    <div className={styles.component}>
      {items.map((x) => (
        <RankingItem
          key={x.name}
          name={x.name}
          ranking={x.ranking}
          interval={x.interval}
        />
      ))}
    </div>
  );
}
