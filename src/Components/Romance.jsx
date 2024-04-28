
import React from "react";
import { categoryRomance} from "./Products";
import { Product } from "./Product";
export default function Romance() {
  return (
    <section id="Romance" className="RomanceContainer">
      <div className="grid">
        {categoryRomance.map((product) => (
          <Product data ={product}/>
        ))}
      </div>
    </section>
  );
}
