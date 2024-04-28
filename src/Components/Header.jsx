import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { categoryHeader2, categoryHeader1 } from "./Products";
import { Product } from "./Product";
import React, {useEffect} from "react";
import Footer from "./Footer";

export default () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1080 },
      items: 5,
      // slidesToSlide: 3,
    },
    desktop2: {
      breakpoint: { max: 1080, min: 851 },
      items: 4,
      // slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 850, min: 721 },
      items: 3,
      // slidesToSlide: 2,
    },
    tablet2: {
      breakpoint: { max: 720, min: 561 },
      items: 2,
      // slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 560, min: 0 },
      items: 1, 
      // slidesToSlide: 1,
    },
  };
  const path = window.location.pathname;
  const scrollToTop = () => {
    window.scrollTo(0, 0)
  }

  useEffect(() => {
    const timerId = setTimeout(() => {
      scrollToTop()
    }, 10)

    return () => clearTimeout(timerId)
  }, [])
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
          infinite ={true}
          sliderClass="slides"
          containerClass="carousel-container"
          slidesToSlide={1}
        >
          {categoryHeader1.map((product) => (
            <div className="eachItem"key={product.id}>
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
        <Link onClick={scrollToTop} to="/fiction">
          <button>See More...</button>
        </Link>
      </div>
      <div className="CarouselContainer">
      <Carousel
          className="carousel"
          responsive={responsive}
          autoPlay={true}
          autoPlaySpeed={3000}
          infinite = {true}
          sliderClass="slides"
          containerClass="carousel-container"
          slidesToSlide={1}
        >
          {categoryHeader2.map((product) => (
            <div className="eachItem" key={product.id}>
              <Product data={product} />
            </div>
          ))}
        </Carousel>
      </div>
      <hr />

      <div className="Bottom">
        <h1>Discover our extensive range of genre collections.</h1>
        <div className="BottomButton">
          <Link onClick={scrollToTop} to="/NonFiction">
            <button>Non-Fiction</button>
          </Link>
          <Link onClick={scrollToTop} to="/GiftCards">
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
