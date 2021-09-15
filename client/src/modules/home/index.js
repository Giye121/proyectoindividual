import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getCountries, getAllActivities } from "../../redux/actions";
import CountriesCards from "../CountriesCards/CountriesCards";
import styles from "./styles.module.css";
import NavBar from "../NavBar/NavBar";

function Home({ countries, getCountries, getAllActivities }) {
  useEffect(() => {
    getCountries();
    getAllActivities();
  }, []);

  return (
    <div className={styles.container}>
      <NavBar />
      <div>
        <CountriesCards countries={countries} />
      </div>
      {console.log("HOLAA", countries)};
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    countries: state.countries,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCountries: () => dispatch(getCountries()),
    getAllActivities: () => dispatch(getAllActivities()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
