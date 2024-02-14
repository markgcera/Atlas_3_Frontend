import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/css/NavBarMobile.css";
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
      <div className="overallHeader">
        <div>
          <img
            src={fintechLogo}
            alt="fintech Logo"
            className="fintechLogo"
            onClick={toggleSideBar}
          />
        </div>
        <div>
          {showSideBar ? (
            <img
              src={closeSymbol}
              alt="Close Logo"
              className="closeLogo"
              onClick={closeSideBar}
            />
          ) : (
            <img src={personLogo} alt="Person Logo" className="personLogo" />
          )}
        </div>
      </div>
      {showSideBar && (
        <div className="sidebar">
          <div>
            <Link to="/" className="Link">
              Home
            </Link>
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
          <div>
            <Link to="/" className="Link">
              Profile
            </Link>
          </div>
          <div>
            <Link to="/" className="Link">
              Sign Out
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
