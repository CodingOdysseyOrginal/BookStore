import './TrueCrime.css'
import React from "react";
import { categoryHistory, categoryTrueCrime} from "./Products";
import { Product } from "./Product";

export default function TrueCrime(){
    return(
        <div id="TrueCrime">
            <h1>Whodunit Wonders: True Crime Thrillers</h1>
            <div className="grid">
        {categoryTrueCrime.map((product) => (
          <Product data ={product}/>
        ))}
      </div>
        </div>
    )
}