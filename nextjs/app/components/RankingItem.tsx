import styles from "./RankingItem.module.css";

interface Props {
  ranking: number;
  name: string;
  interval?: number;
}

export type RankingItemProps = Props;

const intervalFormatter = new Intl.NumberFormat("en", {
  minimumFractionDigits: 4,
});

export function RankingItem(props: Props) {
  return (
    <div className={styles.component}>
      <div className={`${styles.ranking}`}>{props.ranking}</div>
      <div className={styles.name}>{props.name}</div>
      {props.ranking === 1 ? (
        <div>LEADER</div>
      ) : (
        <div>
          {props.interval && "+" + intervalFormatter.format(props.interval)}
        </div>
      )}
    </div>
  );
}
