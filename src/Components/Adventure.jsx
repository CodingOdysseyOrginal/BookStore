import "./Adventure.css";
import Card from "./Cards";
import React from "react";
import { categoryAdventure } from "./Products";
import { Product } from "./Product";

export default function Adventure() {
  return (
    <div id="Adventure" className="adventureContainer">
      <h1>Adventures Await Between the Pages</h1>
      <div className="grid">
        {categoryAdventure.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  );
}
