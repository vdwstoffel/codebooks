import { useState } from "react";
import { createPortal } from "react-dom";

import BrowserWindow from "../../BrowserWindow/BrowserWindow"

import styles from "./General.module.css";

export default function ModalPortal() {
  const [isOpen, setIsOpen] = useState(false);

  function openModel() {
    setIsOpen(true);
  }

  function closeModel() {
    setIsOpen(false);
  }

  return (
    <BrowserWindow>
      <div className={styles.modalContainer}>
        <h1>Modal</h1>
        <div>
          <button onClick={openModel}>Click To Open</button>

          {isOpen &&
            createPortal(
              <div className={styles.modal}>
                <p>This is a modal with Portal</p>
                <button onClick={closeModel}>close</button>
              </div>,
              document.body
            )}
        </div>
      </div>
    </BrowserWindow>
  );
}
