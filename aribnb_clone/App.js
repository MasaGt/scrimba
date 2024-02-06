import React from "react";
import { NavBar } from "./components/NavBar";
import { Hero } from "./components/Hero";
import { Card } from "./components/Card";

/*
Challenge: Build the Navbar component.
Check the Figma file for the design specifics.
*/

export default function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <Card />
    </div>
  );
}
