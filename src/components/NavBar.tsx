import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import styles from "../assets/css/NavBar.module.css";
import personLogo from "../assets/img/person_logo.png";
import fintechLogo from "../assets/img/fintech_logo.png";

function Navbar(): JSX.Element {
  const [showProfileOptions, setShowProfileOptions] = useState(false);
  const overallHeaderRef = useRef(null);
  const profileOptionsRef = useRef(null);

  const toggleProfileOptions = () => {
    setShowProfileOptions(!showProfileOptions);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        overallHeaderRef.current &&
        !overallHeaderRef.current.contains(event.target) &&
        profileOptionsRef.current &&
        !profileOptionsRef.current.contains(event.target)
      ) {
        setShowProfileOptions(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <header>
      <div className={styles.overallHeader} ref={overallHeaderRef}>
        <div>
          <a href="/">
            <img
              src={fintechLogo}
              alt="fintech Logo"
              className={styles.fintechLogo}
            />
          </a>
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
        <div ref={profileOptionsRef}>
          <img
            src={personLogo}
            alt="Person Logo"
            className={styles.personLogo}
            onClick={toggleProfileOptions}
          />
          {showProfileOptions && (
            <div className={styles.profileOptions}>
              <div className={styles.profileOption}>
                <p>Profile</p>
              </div>
              <div className={styles.signOutOption}>
                <p>Sign Out</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
