import logo from "Logo";
import React from "react";

export const NavBar = () => {
  return (
    <nav className="navbar">
      <img src={logo} className="navbar--img" />
    </nav>
  );
};
