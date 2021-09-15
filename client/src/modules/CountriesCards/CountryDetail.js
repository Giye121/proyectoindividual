import React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { getCountryDetail } from "../../redux/actions";
import styles from "./CountryDetail.module.css";
import { Link } from "react-router-dom";

function CountryDetail({ match, country, getCountryId }) {
  useEffect(() => {
    getCountryId(match.match.params.id);
  }, []);
  console.log("DETAIL", match.match.params.id);
  return (
    <div className={styles.container}>
      <Link to={"/home"} className={styles.btnHome}>
        Home{" "}
      </Link>
      <div className={styles.countryCard}>
        <div>
          <h2>{country.name} </h2>
          <h4>Country code: {country.id}</h4>
        </div>
        <div>
          <img src={country.flag} alt="Flag not found" />
        </div>
        <div className={styles.info}>
          <p>Capital: {country.capital}</p>
          <p>Continent: {country.continent}</p>
          <p>Subcontinent: {country.subregion}</p>
          <p>Area: {country.area} km²</p>
          <p>Population: {country.population}</p>
          <p>
            Turistic activities:{" "}
            {country.activities
              ? country.activities.map((activity) => "«" + activity.name + "» ")
              : null}
          </p>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    country: state.country,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCountryId: (countryId) => dispatch(getCountryDetail(countryId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CountryDetail);
