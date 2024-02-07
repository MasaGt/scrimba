import React from "react";
import { NavBar } from "./components/NavBar";
import { Hero } from "./components/Hero";
import { Card } from "./components/Card";
import Data from "./data";

/*
Challenge: Build the Navbar component.
Check the Figma file for the design specifics.
*/

export default function App() {
  const cards = Data.map((data, index) => {
    return (
      <Card
        key={index}
        img={data.coverImg}
        rating={data.stats.rating}
        reviewCnt={data.stats.reviewCount}
        location={data.location}
        heading={data.title}
        price={data.price}
      />
    );
  });
  return (
    <div>
      <NavBar />
      <Hero />
      <section className="cards">{cards}</section>
    </div>
  );
}
