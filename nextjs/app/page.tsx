import styles from "./page.module.css";
import { RankingPanel } from "./components/RankingPanel";

export default function Page() {
  return (
    <div className={styles.page}>
      <RankingPanel />
    </div>
  );
}
