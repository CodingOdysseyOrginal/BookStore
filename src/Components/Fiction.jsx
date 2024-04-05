import React, { useState, useEffect, useContext } from "react";
import "./Fiction.css";
import Horror from "./Horror";
import Romance from "./Romance";
import ScienceFiction from "./ScienceFiction";
import Footer from "./Footer.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { Link as ScrollLink } from "react-scroll";
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import Adventure from "./Adventure.jsx";
import ShoppingCartImage from "./assets/ShoppingCart.svg";
import { ShopContext } from "./ShopContext";


const Fiction = () => {
  const { cartItems } = useContext(ShopContext);

  const totalItemsInCart = Object.values(cartItems).reduce(
    (acc, curr) => acc + curr,
    0
  );

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const [isSticky, setIsSticky] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

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

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const CustomLink = ({ to, children }) => {
    const handleClick = () => {
      scrollToTop();
    };

    return (
      <li>
        <ScrollLink to={to} smooth={true} duration={500} onClick={handleClick}>
          {children}
        </ScrollLink>
      </li>
    );
  };

  return (
    <section className="FictionContainer">
      {/* SECONDARY NAVBAR */}
      <nav className={`SecondaryNavbar ${isSticky ? "sticky" : ""}`}>
        <div className="MenuIcon" onClick={toggleMenu}>
          
        </div>
        <ul className={`menu ${showMenu ? 'active' : ''}`}>
          <li className="HorrorLink">
            <CustomLink to="Horror">Horror</CustomLink>
          </li>
          <li className="RomanceLink">
            <CustomLink to="Romance">Romance</CustomLink>
          </li>
          <li className="ScienceLink">
            <CustomLink to="ScienceFiction">Science Fiction</CustomLink>
          </li>
          <li className="AdventureLink">
            <CustomLink to="Adventure">Adventure</CustomLink>
          </li>
          <li>
            <CustomLink to="Fiction">
              <div>
                <FontAwesomeIcon icon={faArrowUp} />
              </div>
            </CustomLink>
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

      <div className="FictionHeader">
        <h1>Explore the Worlds of Fiction...</h1>
      </div>

      <hr />
      <Horror />
      <div className="divide"></div>
      <Romance />
      <div className="divide"></div>
      <ScienceFiction />
      <div className="divide"></div>
      <Adventure />
      <div className="divide"></div>
      <Footer />
    </section>
  );
};

export default Fiction;
