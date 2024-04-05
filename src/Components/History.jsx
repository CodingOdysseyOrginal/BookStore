import "./History.css";
import React from "react";
import { Product } from "./Product";
import { categoryHistory } from "./Products";

export default function History() {
  return (
    <div className="History" id="History">
      <h1> Where Every Book Tells a Story!</h1>
      <div className="grid">
        {categoryHistory.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  );
}
