import React from "react";
import Logo from "Img/airbnb-logo.png";

export const NavBar = () => {
  return (
    <nav className="navbar">
      <img src={Logo} className="nav--logo" />
    </nav>
  );
};
