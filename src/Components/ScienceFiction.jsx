import "./ScienceFiction.css";
import React from "react";
import { categoryScience} from "./Products";
import { Product } from "./Product";

export default function ScienceFiction() {
  return (
    <div id="ScienceFiction" className="ScienceFictionContainer">
      <h1 className="ScienceFictionTitle">
        Sci-Fi Spectacles at Your Fingertips
      </h1>
      <div className="grid">
        {categoryScience.map((product) => (
          <Product data ={product}/>
        ))}
      </div>
    </div>
  );
}
