import BrowserWindow from "../BrowserWindow/BrowserWindow";

import styles from "./General.module.css";

export default function CenterItem() {
  return (
    <BrowserWindow>
      <div className={styles.outerContainer}>
        <div className={styles.container}>Div place nicely in the center</div>
      </div>
    </BrowserWindow>
  );
}
