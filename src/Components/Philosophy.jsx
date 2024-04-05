import './Philosophy.css';
import React from "react";
import { categoryPhilosophy} from "./Products";
import { Product } from "./Product";

export default function Philosophy(){
    return(
        <div id="Philosophy"
        className='PhilososphyContainer'>
            <h1>Faith & Philosophy: Soulful Musings</h1>
            <div className="grid">
        {categoryPhilosophy.map((product) => (
          <Product data ={product}/>
        ))}
      </div>
        </div>
    )
}