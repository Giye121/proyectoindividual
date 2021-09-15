import React from "react";
import styles from "./Activities.module.css";
export default function ActivitiesSearchBar() {
  return (
    <div>
      <div className={styles.wrap}>
        <div className={styles.search}>
          <input type="text" placeholder="Activity search..." />
          <button type="submit" className={styles.searchButton}></button>
        </div>
      </div>
    </div>
  );
}
