import React, { useState, useEffect } from "react";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    //
    <div className={`nav  ${show && "nav__black"}`}>
      <img
        className="logo-netflix"
        src="https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo.png"
        alt="netflix_logo"
      />
      <img
        className="nav_avatar"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="netflix_logo"
      />
    </div>
  );
}

export default Nav;
