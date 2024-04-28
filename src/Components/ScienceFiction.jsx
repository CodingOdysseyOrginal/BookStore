import React from "react";
import { categoryScience} from "./Products";
import { Product } from "./Product";

export default function ScienceFiction() {
  return (
    <div id="ScienceFiction" className="ScienceFictionContainer">
     
      <div className="grid">
        {categoryScience.map((product) => (
          <Product data ={product}/>
        ))}
      </div>
    </div>
  );
}
