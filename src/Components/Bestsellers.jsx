import React, { useState, useEffect, useContext } from "react";
import "./Bestsellers.css";
import Footer from "./Footer";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";

import { categoryBestseller, categoryClassic } from "./Products";
import { Product } from "./Product";
import ShoppingCartImage from "./assets/ShoppingCart.svg";
import { ShopContext } from "./ShopContext";

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const Bestsellers = () => {
  const { cartItems } = useContext(ShopContext);

  const totalItemsInCart = Object.values(cartItems).reduce(
    (acc, curr) => acc + curr,
    0
  );

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const threshold = 100;

      if (scrollTop > threshold) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section>
      {/* SECONDARY NAVBAR */}
      <nav className={`SecondaryNavbar ${isSticky ? "sticky" : ""}`}>
        <ul>
          <li className="ClassicLink">
            <ScrollLink to="Classic" smooth={true} duration={500}>
              Penguin clothbound classics
            </ScrollLink>
          </li>
          <li className="BestsellersLink">
            <ScrollLink to="Bestsellers" smooth={true} duration={500}>
              Bestsellers
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="Classic" smooth={true} duration={500}>
              <div onClick={scrollToTop}>
                <FontAwesomeIcon icon={faArrowUp} />
              </div>
            </ScrollLink>
          </li>
          <li>
            <Link to="/cart">
              <img src={ShoppingCartImage} alt="Cart" height="30px" />
              {totalItemsInCart > 0 && (
                <span className="cart-count">{totalItemsInCart}</span>
              )}
            </Link>
          </li>
        </ul>
      </nav>
      <div id="Classic">
        <h1>Flippers and Feathers: The Penguin Classics</h1>
        <div className="grid">
          {categoryClassic.map((product) => (
            <Product data={product} />
          ))}
        </div>
        <hr id="Bestsellers" />
        <h1 className="SecondHeader">
          Classically Bound: Where Timeless Tales Take Flight
        </h1>
        <div className="grid">
          {categoryBestseller.map((product) => (
            <Product data={product} />
          ))}
        </div>
        <Footer />
      </div>
    </section>
  );
};

export default Bestsellers;
