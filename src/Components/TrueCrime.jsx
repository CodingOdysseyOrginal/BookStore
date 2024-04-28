import React from "react";
import {categoryTrueCrime} from "./Products";
import { Product } from "./Product";

export default function TrueCrime(){
    return(
        <div id="TrueCrime">
            <div className="grid">
        {categoryTrueCrime.map((product) => (
          <Product data ={product}/>
        ))}
      </div>
        </div>
    )
}