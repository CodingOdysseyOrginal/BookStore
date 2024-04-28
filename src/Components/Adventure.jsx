import React from "react";
import { categoryAdventure } from "./Products";
import { Product } from "./Product";

export default function Adventure() {
  return (
    <div id="Adventure" className="adventureContainer">
      <div className="grid">
        {categoryAdventure.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  );
}
