import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../assets/css/NavBarMobile.module.css"; // Import CSS module
import personLogo from "../assets/img/person_logo.png";
import fintechLogo from "../assets/img/fintech_logo.png";
import closeSymbol from "../assets/img/material-symbols_close.png";

function Navbar(): JSX.Element {
  const [showSideBar, setShowSideBar] = useState(false);

  const toggleSideBar = () => {
    setShowSideBar(true);
  };

  const closeSideBar = () => {
    setShowSideBar(false);
  };

  return (
    <header>
      <div className={styles.overallHeader}>
        <div>
          <img
            src={fintechLogo}
            alt="fintech Logo"
            className={styles.fintechLogo} // Use curly braces to evaluate the variable
            onClick={toggleSideBar}
          />
        </div>
        <div>
          {showSideBar ? (
            <img
              src={closeSymbol}
              alt="Close Logo"
              className={styles.closeLogo} // Use curly braces to evaluate the variable
              onClick={closeSideBar}
            />
          ) : (
            <img
              src={personLogo}
              alt="Person Logo"
              className={styles.personLogo} // Use curly braces to evaluate the variable
            />
          )}
        </div>
      </div>
      {showSideBar && (
        <div className={styles.sidebar}>
          {" "}
          {/* Use curly braces to evaluate the variable */}
          <div>
            <Link to="/" className={styles.Link}>
              Home
            </Link>
          </div>
          <div>
            <Link to="/announcements" className={styles.Link}>
              Announcements
            </Link>
          </div>
          <div>
            <Link to="/members" className={styles.Link}>
              Members
            </Link>
          </div>
          <div>
            <Link to="/events" className={styles.Link}>
              Events
            </Link>
          </div>
          <div>
            <Link to="/tasks" className={styles.Link}>
              Tasks
            </Link>
          </div>
          <div>
            <Link to="/" className={styles.Link}>
              Attendance
            </Link>
          </div>
          <div>
            <Link to="/recruitment" className={styles.Link}>
              Recruitment
            </Link>
          </div>
          <div>
            <Link to="/" className={styles.Link}>
              Profile
            </Link>
          </div>
          <div>
            <Link to="/" className={styles.Link}>
              Sign Out
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
