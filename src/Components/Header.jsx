import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { categoryHeader2, categoryHeader1 } from "./Products";
import { Product } from "./Product";
import React from "react";
import Footer from "./Footer";

export default () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1251 },
      items: 5,
      // slidesToSlide: 3,
    },
    desktop2: {
      breakpoint: { max: 1250, min: 1001 },
      items: 4,
      // slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1000, min: 751 },
      items: 3,
      // slidesToSlide: 2,
    },
    tablet2: {
      breakpoint: { max: 750, min: 501 },
      items: 2,
      // slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 500, min: 0 },
      items: 2, 
      // slidesToSlide: 1,
    },
  };
  const path = window.location.pathname;
  return (
    <section className="HeaderContainer">
      <div className="TitleHeader">
        <h1>
          <i>Have a look at our Bestsellers...</i>
        </h1>
        <CustomLink to="/Bestsellers">
          <button>See More...</button>
        </CustomLink>
      </div>
      <div className="CarouselContainer"> 
        <Carousel
          className="carousel"
          responsive={responsive}
          autoPlay={true}
          autoPlaySpeed={3000}
          infinite
          sliderClass="slides"
          containerClass="carousel-container"
          slidesToSlide={1}
        >
          {categoryHeader1.map((product) => (
            <div key={product.id}>
              <Product data={product} />
            </div>
          ))}
        </Carousel>
      </div>
      <hr />
      <div className="TitleHeader">
        <h1>
          <i>Our Best Fiction Books...</i>
        </h1>
        <CustomLink to="/fiction">
          <button>See More...</button>
        </CustomLink>
      </div>
      <div className="CarouselContainer">
      <Carousel
          className="carousel"
          responsive={responsive}
          autoPlay={true}
          autoPlaySpeed={3000}
          infinite
          sliderClass="slides"
          containerClass="carousel-container"
          slidesToSlide={1}
        >
          {categoryHeader2.map((product) => (
            <div key={product.id}>
              <Product data={product} />
            </div>
          ))}
        </Carousel>
      </div>
      <hr />

      <div className="Bottom">
        <h1>Discover our extensive range of genre collections.</h1>
        <div className="BottomButton">
          <Link to="/NonFiction">
            <button>Non-Fiction</button>
          </Link>
          <Link to="/GiftCards">
            <button>Gift Cards</button>
          </Link>
        </div>
      </div>
      <Footer />
    </section>
  );
};

function CustomLink({ to, children, ...props }) {
  const resolvePath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvePath.pathname, end: true });
  return (
    <li id="LinkList" className={isActive ? "active" : ""}>
      <Link to={to}>{children}</Link>
    </li>
  );
}
