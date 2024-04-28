import React from "react";
import { Product } from "./Product";
import { categoryHistory } from "./Products";

export default function History() {
  return (
    <div className="History" id="History">
      <div className="grid">
        {categoryHistory.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  );
}
