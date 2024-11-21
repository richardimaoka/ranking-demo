import { RankingItem, RankingItemProps } from "./RankingItem";
import styles from "./RankingList.module.css";

interface Props {
  items: RankingItemProps[];
}

export function RankingList(props: Props) {
  return (
    <div className={styles.component}>
      {props.items.map((x) => (
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
