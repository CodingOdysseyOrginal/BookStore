import React, { useContext } from 'react'
import { ShopContext } from './ShopContext';

export const CartItem = (props) => {
    const { id, productName, price, productImage, title, author, format } = props.data;
    const { cartItems, addToCart, removeFromCart, updateCartItemCount} = useContext(ShopContext);
  return (
    <div className='cartItem'>
        <img src={productImage}/>
        <div className="description">
            <p><b>{title}</b></p>
            <p>{author}</p>
            <p>£{price}</p>
            <p>{format}</p>
            <div className="countHandler">
                <button onClick={() => removeFromCart(id)}> - </button>
                <input value={cartItems[id]} onChange={(e) => updateCartItemCount(Number(e.target.value), id)}/>
                <button onClick={() => addToCart(id)}> + </button>
            </div>
        </div>
    </div>
  )
}
