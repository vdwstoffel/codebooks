import React from 'react';
import styles from './styles.module.css';

function Terminal({ children, title = "Terminal" }) {
  return (
    <div className={styles.terminalContainer}>
      <div className={styles.terminalHeader}>
        <div className={styles.terminalButtons}>
          <span className={`${styles.terminalButton} ${styles.close}`}></span>
          <span className={`${styles.terminalButton} ${styles.minimize}`}></span>
          <span className={`${styles.terminalButton} ${styles.maximize}`}></span>
        </div>
        <div className={styles.terminalTitle}>{title}</div>
      </div>
      <div className={styles.terminalBody}>
        <pre className={styles.terminalContent}>
          {children}
        </pre>
      </div>
    </div>
  );
}

export default Terminal;
