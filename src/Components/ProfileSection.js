import React from "react";
import { NavLink } from "react-router-dom";
import ranjanapoojary from "../image/mypicture.jpg";
import "./ProfileSection.css";

function ProfileSection() {
  return (
    <div className="profile-section">
      <div className="profile-picture-container">
        <img
          src={ranjanapoojary}
          alt="Ranjana Poojary"
          className="profile-picture"
        />
      </div>

      <div className="profile-info">
        <h1>Hello!</h1>
        <p>
          Welcome to my profile! I am Ranjana Poojary, a passionate front-end
          developer with a love for creating beautiful and functional websites.
          Explore my work and feel free to reach out!
        </p>

        <div className="circle-container">
          <NavLink to="/about" className="circle">
            Resume
          </NavLink>
          <NavLink to="/projects" className="circle">
            Skills
          </NavLink>
          <NavLink to="/contact" className="circle">
            Contact
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default ProfileSection;
