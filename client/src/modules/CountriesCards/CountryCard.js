import React from "react";
import { Link } from "react-router-dom";
import styles from "./CountryCard.module.css";

export function CountryCard({ name, id, flag, population, continent }) {
  return (
    <div>
      <div className={styles.countryCard}>
        <Link to={`/detail/${id}`}>
          <img src={flag} alt={` ${name} flag`} />
        </Link>
        <div>
          <h5>{name}</h5>
          <p>Continent: {continent}</p>
          <p>Population: {population}</p>
        </div>
      </div>
    </div>
  );
}

export default CountryCard;
