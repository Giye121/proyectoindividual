import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
export default function LandingPage() {
  return (
    <>
      <div className={styles.landing}>
        <Link to="/home">
          <button className={styles.btn}>Enter Countries App</button>
        </Link>
      </div>
    </>
  );
}
