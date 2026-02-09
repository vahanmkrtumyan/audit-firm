import React from "react";
import { Link } from "react-router-dom";
import LanguageSelector from "./LanguageSelector";

function Navigation() {
  return (
    <ul className="navigation">
      <li className="dropdown">
        <Link to="#">Home</Link>
        <div className="dropdown-btn">
          <i className="fa fa-angle-down"></i>
        </div>
        <ul>
          <li>
            <Link to="/">Home page 01</Link>
          </li>
          <li>
            <Link to="/index-2">Home page 02</Link>
          </li>
          <li>
            <Link to="/index-3">Home page 03</Link>
          </li>
          <li>
            <Link to="/index-4">Home page 04</Link>
          </li>
          <li>
            <Link to="/index-5">Home page 05</Link>
          </li>
          <li>
            <Link to="/index-6">Home page 06</Link>
          </li>
          <li>
            <Link to="/index-7">Home page 07</Link>
          </li>
          <li className="dropdown">
            <Link to="#">Single Styles</Link>
            <ul>
              <li>
                <Link to="/index-1-single">Single Styles One</Link>
              </li>
              <li>
                <Link to="/index-2-single">Single Styles Two</Link>
              </li>
              <li>
                <Link to="/index-3-single">Single Styles Three</Link>
              </li>
              <li>
                <Link to="/index-4-single">Single Styles Four</Link>
              </li>
              <li>
                <Link to="/index-5-single">Single Styles Five</Link>
              </li>
              <li>
                <Link to="/index-6-single">Single Styles Six</Link>
              </li>
              <li>
                <Link to="/index-7-single">Single Styles Seven</Link>
              </li>
            </ul>
          </li>
          <li className="dropdown">
            <Link to="#">Dark Styles</Link>
            <ul>
              <li>
                <Link to="/index-1-dark">Dark Styles One</Link>
              </li>
              <li>
                <Link to="/index-2-dark">Dark Styles Two</Link>
              </li>
              <li>
                <Link to="/index-3-dark">Dark Styles Three</Link>
              </li>
              <li>
                <Link to="/index-4-dark">Dark Styles Four</Link>
              </li>
              <li>
                <Link to="/index-5-dark">Dark Styles Five</Link>
              </li>
              <li>
                <Link to="/index-6-dark">Dark Styles Six</Link>
              </li>
              <li>
                <Link to="/index-7-dark">Dark Styles Seven</Link>
              </li>
            </ul>
          </li>
        </ul>
      </li>
      <li className="dropdown">
        <Link to="#">Pages</Link>
        <div className="dropdown-btn">
          <i className="fa fa-angle-down"></i>
        </div>
        <ul>
          <li>
            <Link to="/page-about">About</Link>
          </li>
          <li>
            <Link to="/page-faq">Faq</Link>
          </li>
          <li>
            <Link to="/page-pricing">Pricing</Link>
          </li>
          <li className="dropdown">
            <Link to="#">Team</Link>
            <ul>
              <li>
                <Link to="/page-team">Team List</Link>
              </li>
              <li>
                <Link to="/page-team-details">Team Details</Link>
              </li>
            </ul>
          </li>
          <li className="dropdown">
            <Link to="#">Shop</Link>
            <ul>
              <li>
                <Link to="/shop-products">Products</Link>
              </li>
              <li>
                <Link to="/shop-products-sidebar">Products with Sidebar</Link>
              </li>
              <li>
                <Link to="/shop-product-details">Product Details</Link>
              </li>
              <li>
                <Link to="/shop-cart">Cart</Link>
              </li>
              <li>
                <Link to="/shop-checkout">Checkout</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/page-testimonial">Testimonials</Link>
          </li>
          <li>
            <Link to="/page-404">404</Link>
          </li>
        </ul>
      </li>
      <li className="dropdown">
        <Link to="#">Services</Link>
        <div className="dropdown-btn">
          <i className="fa fa-angle-down"></i>
        </div>
        <ul>
          <li>
            <Link to="/page-services">Services</Link>
          </li>
          <li>
            <Link to="/page-service-details">Services Details</Link>
          </li>
        </ul>
      </li>
      <li className="dropdown">
        <Link to="#">Portfolio</Link>
        <div className="dropdown-btn">
          <i className="fa fa-angle-down"></i>
        </div>
        <ul>
          <li>
            <Link to="/page-case">Portfolio</Link>
          </li>
          <li>
            <Link to="/page-case-details">Portfolio Details</Link>
          </li>
        </ul>
      </li>
      <li className="dropdown">
        <Link to="#">News</Link>
        <div className="dropdown-btn">
          <i className="fa fa-angle-down"></i>
        </div>
        <ul>
          <li>
            <Link to="/news-grid">News Grid</Link>
          </li>
          <li>
            <Link to="/news-details">News Details</Link>
          </li>
        </ul>
      </li>
      <li>
        <Link to="/page-contact">Contact</Link>
      </li>
      <li className="language-nav-item">
        <LanguageSelector />
      </li>
    </ul>
  );
}

export default Navigation;
