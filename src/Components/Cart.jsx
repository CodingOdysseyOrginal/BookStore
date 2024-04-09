import React, { useContext } from "react";
import { PRODUCTS } from "./Products";
import { ShopContext } from './ShopContext';
import {CartItem} from './cartItem';
import './Cart.css'
import {useNavigate} from "react-router-dom";



export default function Cart() {
  const {cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount()

const navigate = useNavigate();

  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cartItems">
        {PRODUCTS.map((product) =>{
          if (cartItems[product.id] !== 0) {
            return <CartItem data ={product} />;
          }
        })}
        </div>
        
      {totalAmount > 0 ? 
        <div className="Checkout">
          <p>Subtotal: £{totalAmount}</p>
          <button onClick={() => navigate("/Bookstore")}> Continue Shopping</button>
          <button> Checkout</button>
        </div>
         : <h1><b>Your Cart is Empty</b></h1> }
    </div>
    
  );
}
