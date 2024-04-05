import React from 'react';
import './Memoirs.css';
import { categoryMemoir} from "./Products";
import { Product } from "./Product";

export default function Memoirs() {
    return (
        <section id="Memoirs">
            <h1>Echoes of Existence: Tales of Truth and Triumph</h1>
            <div className="grid">
        {categoryMemoir.map((product) => (
          <Product data ={product}/>
        ))}
      </div>
          
        </section>
    );
}
