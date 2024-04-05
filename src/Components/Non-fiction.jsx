import React, { useState, useEffect, useContext } from "react";
import "./Non-fiction.css";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Memoirs from "./Memoirs";
import History from "./History";
import TrueCrime from "./TrueCrime";
import Philosophy from "./Philosophy";
import ShoppingCartImage from "./assets/ShoppingCart.svg";
import { ShopContext } from "./ShopContext";

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const NonFiction = () => {
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
    <section className="NonFictionContainer">
      {/* SECONDARY NAVBAR */}
      <nav className={`SecondaryNavbar ${isSticky ? "sticky" : ""}`}>
        <ul>
          <li className="MemoirsLink">
            <ScrollLink to="Memoirs" smooth={true} duration={500}>
              Memoirs & Biographies
            </ScrollLink>
          </li>
          <li className="HistoryLink">
            <ScrollLink to="History" smooth={true} duration={500}>
              History
            </ScrollLink>
          </li>
          <li className="TrueCrimeLink">
            <ScrollLink to="TrueCrime" smooth={true} duration={500}>
              True Crime & Investigations
            </ScrollLink>
          </li>
          <li className="PhilosophyLink">
            <ScrollLink to="Philosophy" smooth={true} duration={500}>
              Philosophy & Religion
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="NonFiction" smooth={true} duration={500}>
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

      <div className="NonFictionHeader">
        <h1>Fact or Fiction: Get Real with Nonfiction!</h1>
      </div>

      <hr />
      <Memoirs />
      <div className="divide"></div>
      <History />
      <div className="divide"></div>
      <TrueCrime />
      <div className="divide"></div>
      <Philosophy />
      <div className="divide"></div>

      <Footer />
    </section>
  );
};

export default NonFiction;
