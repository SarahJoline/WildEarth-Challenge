import React from "react";
import { Link, useLocation } from "react-router-dom";
import SliderIcon from "../../icons/sliders.svg";
import SettingsIcon from "../../icons/settings.svg";

import "./index.css";

function NavBar() {
  let path = useLocation();

  if (path.pathname === "/form") {
    return (
      <div className="NavBar">
        <Link to={"/"} className="NavBarItem">
          Back
        </Link>
        <div className="NavBarItem NavBarTitle">Yoga Habit</div>
        <div className="NavBarItem" />
      </div>
    );
  }

  return (
    <div className="NavBar">
      <Link to="#" className="NavBarItem">
        <img src={SettingsIcon} width="24px" alt="settings" />
      </Link>

      <div className="NavBarItem NavBarTitle">Habit Tracker</div>

      <Link to="#" className="NavBarItem">
        <img src={SliderIcon} width="24px" alt="slider" />
      </Link>
    </div>
  );
}

export default NavBar;
