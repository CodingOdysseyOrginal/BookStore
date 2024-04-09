import React, { useState } from "react";
import { Link } from 'react-router-dom';

function Card(props) {
  const [addedToCart, setAddedToCart] = useState(false);

  const handleAddToCart = () => {
    setAddedToCart(true);
  };

  return (
    <div className="cardContainer">
      <img className="cardImg" src={props.image} alt={props.title} />
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
        <Link className="cardbutton" to="/reviews">
          <button className="CardButton">Reviews</button>
        </Link>
      </div>
      <h3 className="CardInfo">{props.title}</h3>
      <h3 className="CardInfo">{props.author}</h3>
      <h3 className="CardInfo">{props.price}</h3>
      <h3 className="CardInfo">{props.format}</h3>
    </div>
  );
}
export default Card;