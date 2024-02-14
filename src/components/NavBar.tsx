import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../assets/css/NavBar.css";
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
      <div className="overallHeader" ref={overallHeaderRef}>
        <div>
          <a href="/">
            <img src={fintechLogo} alt="fintech Logo" className="fintechLogo" />
          </a>
        </div>
        <div>
          <Link to="/announcements" className="Link">
            Announcements
          </Link>
        </div>
        <div>
          <Link to="/members" className="Link">
            Members
          </Link>
        </div>
        <div>
          <Link to="/events" className="Link">
            Events
          </Link>
        </div>
        <div>
          <Link to="/tasks" className="Link">
            Tasks
          </Link>
        </div>
        <div>
          <Link to="/" className="Link">
            Attendance
          </Link>
        </div>
        <div>
          <Link to="/recruitment" className="Link">
            Recruitment
          </Link>
        </div>
        <div ref={profileOptionsRef}>
          <img
            src={personLogo}
            alt="Person Logo"
            className="personLogo"
            onClick={toggleProfileOptions}
          />
          {showProfileOptions && (
            <div className="profileOptions">
              <div className="profileOption">
                <p>Profile</p>
              </div>
              <div className="signOutOption">
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
