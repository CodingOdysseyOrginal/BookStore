import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import "./Card.css";
import { ShopContext } from './ShopContext';

export const Product = ({ data }) => {
    const [addedToCart, setAddedToCart] = useState(false);
    const { id, productName, price, productImage, title, author, format } = data;
    const { addToCart, cartItems } = useContext(ShopContext);

    const handleAddToCart = () => {
        addToCart(id);
        setAddedToCart(true);
    };

    const cartItemAmount = cartItems[id];

    return (
        <div className="cardContainer">
            <img className="cardImg" src={productImage} alt={productName} />
            <div className="cardButtonContainer">
                <button
                    className={addedToCart ? "CardButton addedToCart" : "CardButton"}
                    onClick={handleAddToCart}
                    disabled={addedToCart}
                >
                    {addedToCart ? "Added to Cart" : "Add to Cart"}
                </button>
            </div>
            <div className="cardButtonContainer">
                <Link className="cardbutton" to={`/about/${id}`}>
                    <button className="CardButton">About</button>
                </Link>
            </div>
            <h3 className="CardInfo">{title}</h3>
            <h3 className="CardInfo">{author}</h3>
            <h3 className="CardInfo">£ {price}</h3>
            <h3 className="CardInfo">{format}</h3>
        </div>
    );
};
