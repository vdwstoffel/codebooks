import { useRef } from "react";

import BrowserWindow from "../BrowserWindow/BrowserWindow";

import styles from "./ref.module.css";

export default function RefExample() {
  const redBox = useRef();

  function handleClick() {
    redBox.current.className = redBox.current.className + " " + styles.spin;
    redBox.current.textContent = "Spinning";

    setTimeout(() => {
      redBox.current.textContent = "Stable";
      redBox.current.className = `${styles.box} ${styles.red}`;
    }, 5500);
  }

  return (
    <BrowserWindow>
      <div>
        <button onClick={handleClick}>Red</button>
      </div>
      <div>
        <div ref={redBox} className={`${styles.box} ${styles.red}`}>
          Stable
        </div>
      </div>
    </BrowserWindow>
  );
}
