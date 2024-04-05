import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import { useMatch, useResolvedPath } from 'react-router-dom';
import ShoppingCartImage from './assets/ShoppingCart.svg';
import { ShopContext } from './ShopContext';
import menuIcon from "./assets/menuIcon.svg";

export default function Navbar() {
  const { cartItems } = useContext(ShopContext);
  const [showMenu, setShowMenu] = useState(false);

  const totalItemsInCart = Object.values(cartItems).reduce((acc, curr) => acc + curr, 0);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="nav">
      <Link to="/BookStore" className="site-title">
        BookLand 
      </Link>
      <img src={menuIcon} className="MenuIcon" height="30" alt="menuIcon" onClick={toggleMenu} />
      <ul className={`menu ${showMenu ? 'active' : ''}`}>
        <CustomLink to="/fiction">Fiction</CustomLink>
        <CustomLink to="/NonFiction">Non-fiction</CustomLink>
        <CustomLink to="/Bestsellers">Bestsellers</CustomLink>
        <CustomLink to="/GiftCards">Gift Cards</CustomLink>
        <CustomLink to="/Cart">
          <img src={ShoppingCartImage} alt="Cart" height="30px" />
          {totalItemsInCart > 0 && <span className="cart-count">{totalItemsInCart}</span>}
        </CustomLink>
      </ul>
    </nav>
  );
}

function CustomLink({ to, children }) {
  const resolvePath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvePath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to}>{children}</Link>
    </li>
  );
}
