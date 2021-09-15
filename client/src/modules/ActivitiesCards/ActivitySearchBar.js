import React from "react";
import { useState } from "react";
import { getActivity } from "../../redux/actions.js";
import { connect } from "react-redux";
import ActivityName from "./ActivityName";
import styles from "./styles.module.css";

function SearchBarActivity({ activity, getActivity }) {
  const [formActualState, setFormActualState] = useState("");
  const [buttonClicked, setButtonClicked] = useState(false);
  const [activityNameButtonClose, setActivityNameButtonClose] = useState(true);

  function handleActivityNameButtonClose() {
    setActivityNameButtonClose(false);
  }

  function handleButtonClick() {
    if (!formActualState) {
      return alert("That Turistic Activity doesn´t seems to exist");
    } else {
      setButtonClicked(true);
      setActivityNameButtonClose(true);
    }
  }
  function handleChange(event) {
    setFormActualState(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    getActivity(formActualState);
    setFormActualState("");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className={styles.searchActivity}
          type="text"
          placeholder="Name (Surf,ski, diving,etc.)"
          value={formActualState}
          onChange={handleChange}
        ></input>
        <button
          className={styles.btn}
          onClick={() => handleButtonClick()}
          type="submit"
        >
          Search Activity
        </button>
        {buttonClicked && activity.name ? (
          <ActivityName
            name={activity.name}
            duration={activity.duration}
            dificulty={activity.dificulty}
            season={activity.season}
            countries={activity.countries}
            onClose={handleActivityNameButtonClose}
            activityNameButtonClose={activityNameButtonClose}
          />
        ) : null}
      </form>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    activity: state.activity,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getActivity: (name) => {
      dispatch(getActivity(name));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBarActivity);
