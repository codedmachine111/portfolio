import React from "react";
import "./Navbar.scss";
import profile from "../../assets/profile.jpg";

export default function Navbar() {
  return (
    <>
      <nav>
        <div className="logo-container">
          <img src={profile} alt="profile" />
        </div>
        <div className="nav-links">
          <li className="nav-link">
          <a href="https://github.com/codedmachine111">
              <i className="fab fa-github"></i>
            </a>
          </li>
          <li className="nav-link">
            <a href="https://twitter.com/whoisakashh">
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li className="nav-link">
          <a href="https://www.linkedin.com/in/akash-nayak-48210624b/">
              <i className="fab fa-linkedin"></i>
            </a>
          </li>
          <li className="nav-link">
          <a href="mailto:akashnayak.ubl@gmail.com">
              <i className="fas fa-envelope"></i>
            </a>
          </li>
        </div>
      </nav>
    </>
  );
}
