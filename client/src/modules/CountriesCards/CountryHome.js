import React from "react";
import { Link } from "react-router-dom";
import styles from "./CountryHome.module.css";

export default function CountryName({
  name,
  id,
  flag,
  population,
  continent,
  onClose,
  countryNameButtonClose,
}) {
  return (
    <div>
      {countryNameButtonClose ? (
        <div className={styles.countryName}>
          <button className={styles.closeBtn} onClick={onClose}>
            X
          </button>
          <Link to={`/detail/${id}`}>
            <img src={flag} alt={`Bandera de ${name}`} />
          </Link>
          <div>
            <h1>{name}</h1>
            <p>Continent: {continent}</p>
            <p>Population: {population}</p>
          </div>
        </div>
      ) : null}
    </div>
  );
}
