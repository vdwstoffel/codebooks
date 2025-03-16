import BrowserWindow from "../BrowserWindow/BrowserWindow";

import styles from "./LoaderSpinner.module.css";

export default function LoaderSpinner({ spinner }) {
  return (
    <BrowserWindow>
      <div className={styles[spinner]}></div>
    </BrowserWindow>
  );
}
