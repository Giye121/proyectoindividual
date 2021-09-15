import React from "react";
import Filters from "../Filters/CountriesFilters.js";
import ActivitiesSearchBar from "../SearchBar/ActivitiesSearchBar";
import CountriesSearchBar from "../SearchBar/CountriesSearchBar";
import styles from "./styles.module.css";
import postActivities from "../ActivitiesCards/postActivities";
import { NavLink } from "react-router-dom";
export default function NavBar() {
  return (
    <div className={styles.NavBar}>
      <Filters />

      <CountriesSearchBar />
      <NavLink to="/createactivity">Create Activity</NavLink>
    </div>
  );
}
