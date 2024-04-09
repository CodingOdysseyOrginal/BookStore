import React, { useContext, useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ShopContext } from './ShopContext';
import Footer from './Footer';
import './About.css';

export default function About() {
    const { id } = useParams();
    const { products, addToCart, cartItems } = useContext(ShopContext);
    const navigate = useNavigate(); 
    const [isAddedToCart, setIsAddedToCart] = useState(false);

    const product = products.find(product => product.id === parseInt(id));

    useEffect(() => {
        if (cartItems[id]) {
            setIsAddedToCart(true);
        } else {
            setIsAddedToCart(false);
        }
    }, [cartItems, id]);

    if (!product) {
        return <div>Loading...</div>;
    }

    const handleContinueShopping = () => {
        navigate("/Bookstore"); 
    };

    const handleAddToCart = () => {
        addToCart(product.id);
        setIsAddedToCart(true);
    };

    return (
        <div className='aboutHeader'>
            <div className="aboutContainer">
                <div className='productimage'>
                    <img src={product.productImage} alt={product.productName} />
                </div>
                <div className="productDetails">
                    <h1>{product.title}</h1>
                    <h2>Genre: {product.genre}</h2>
                    <h2>Price: £{product.price}</h2>
                    <div className='aboutButton'>
                        <hr />
                        <h2>Synopsis</h2>
                        <p>{product.description}</p>
                        <hr />
                        <button
                            onClick={handleAddToCart}
                            disabled={isAddedToCart}
                        >
                            {isAddedToCart ? "Added to Cart" : "Add to Cart"}
                        </button>
                        <button onClick={handleContinueShopping}>Continue shopping</button> 
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}
