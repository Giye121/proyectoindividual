import React from "react";
import styles from "./styles.module.css";
export default function ActivityName({
  name,
  duration,
  difficulty,
  season,
  countries,
  onClose,
  activityNameButtonClose,
}) {
  return (
    <div>
      {activityNameButtonClose ? (
        <div className={styles.activityName}>
          <button className={styles.btnClose} onClick={onClose}>
            X
          </button>
          <h1>{name}</h1>
          <p>Duration: {duration}</p>
          <p>Difficulty: {difficulty}</p>
          <p>Season: {season}</p>
          <p>
            Countries:{" "}
            {countries
              ? JSON.stringify(
                  countries.map((country) => country.name).join(", ")
                )
              : null}
          </p>
        </div>
      ) : null}
    </div>
  );
}
