import React from "react";
import "./GiftCard.css";
import Footer from "./Footer.jsx";
import Barcode from "./assets/barcode.png";

export default function GiftCards() {
  return (
    <div className="GiftCardContainer">
      <h1 className="GiftTitle">BookLand Gift Cards</h1>
      <p className="GiftP">
        Our range of BookLand Gift Cards and eGifts are the attractive, easy,
        and practical way to treat family and friends to the gifts they really
        want. You can arrange Gift Cards to arrive by post, or purchase eGifts
        to arrive by email. We have options for Corporate Gift Cards too.
      </p>
      <div className="Container">
        <div className="giftCard">
          <div className="front">
            <h1 className="frontText">BookLand</h1>
          </div>
        </div>
        <div className="giftCard">
          <div className="back">
            <h1 className="backText">BookLand</h1>
            <img src={Barcode} height="20vh" width="100px" alt="carcode" />
            <div className="barcode"></div>
          </div>
        </div>
      </div>

      <div className="GiftCardButtonGroup">
        <button> Buy an eGift</button>
        <button>Buy a Physical Gift Card Online</button>
        <button>Gift Card FAQs</button>
        <button>Buy Corporate Gift Cards</button>
        <button>National Book Tokens & Other Vouchers</button>
        <button>Gift Card Terms & Conditions</button>
      </div>

      <Footer />
    </div>
  );
}
