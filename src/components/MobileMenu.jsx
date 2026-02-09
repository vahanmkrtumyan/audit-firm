import React, { useState } from "react";
import { Link } from "react-router-dom";

const MobileMenu = () => {
  const [activeDropdown, setActiveDropdown] = useState("");
  const [activeSubDropdown, setActiveSubDropdown] = useState("");

  const toggleDropdown = (key) => {
    setActiveDropdown((prev) => (prev === key ? "" : key));
  };

  const toggleSubDropdown = (key) => {
    setActiveSubDropdown((prev) => (prev === key ? "" : key));
  };

  const renderSubMenu = (items, keyPrefix) => (
    <ul className="sub-menu" style={{ display: activeSubDropdown === keyPrefix ? "block" : "none" }}>
      {items.map(({ label, to }, index) => (
        <li key={index}>
          <Link to={to}>{label}</Link>
        </li>
      ))}
    </ul>
  );

  return (
    <ul className="navigation">
      {/* Home Menu */}
      <li className="dropdown">
        <Link to="#">Home</Link>
        <div className="dropdown-btn" onClick={() => toggleDropdown("home")}>
          <i className="fa fa-angle-down"></i>
        </div>
        <ul className="sub-menu" style={{ display: activeDropdown === "home" ? "block" : "none" }}>
          <li><Link to="/">Home page 01</Link></li>
          <li><Link to="/index-2">Home page 02</Link></li>
          <li><Link to="/index-3">Home page 03</Link></li>
          <li><Link to="/index-4">Home page 04</Link></li>
          <li><Link to="/index-5">Home page 05</Link></li>
          <li><Link to="/index-6">Home page 06</Link></li>
          <li><Link to="/index-7">Home page 07</Link></li>

          {/* Single Styles */}
          <li className="dropdown">
            <Link to="#">Single Styles</Link>
            <div className="dropdown-btn" onClick={() => toggleSubDropdown("home-single")}>
              <i className="fa fa-angle-down"></i>
            </div>
            {renderSubMenu([
              { label: "Single Styles One", to: "/index-1-single" },
              { label: "Single Styles Two", to: "/index-2-single" },
              { label: "Single Styles Three", to: "/index-3-single" },
              { label: "Single Styles Four", to: "/index-4-single" },
              { label: "Single Styles Five", to: "/index-5-single" },
              { label: "Single Styles Six", to: "/index-6-single" },
              { label: "Single Styles Seven", to: "/index-7-single" },
            ], "home-single")}
          </li>

          {/* Dark Styles */}
          <li className="dropdown">
            <Link to="#">Dark Styles</Link>
            <div className="dropdown-btn" onClick={() => toggleSubDropdown("home-dark")}>
              <i className="fa fa-angle-down"></i>
            </div>
            {renderSubMenu([
              { label: "Dark Styles One", to: "/index-1-dark" },
              { label: "Dark Styles Two", to: "/index-2-dark" },
              { label: "Dark Styles Three", to: "/index-3-dark" },
              { label: "Dark Styles Four", to: "/index-4-dark" },
              { label: "Dark Styles Five", to: "/index-5-dark" },
              { label: "Dark Styles Six", to: "/index-6-dark" },
              { label: "Dark Styles Seven", to: "/index-7-dark" },
            ], "home-dark")}
          </li>
        </ul>
      </li>

      {/* Pages */}
      <li className="dropdown">
        <Link to="#">Pages</Link>
        <div className="dropdown-btn" onClick={() => toggleDropdown("pages")}>
          <i className="fa fa-angle-down"></i>
        </div>
        <ul className="sub-menu" style={{ display: activeDropdown === "pages" ? "block" : "none" }}>
          <li><Link to="/page-about">About</Link></li>
          <li><Link to="/page-faq">Faq</Link></li>
          <li><Link to="/page-pricing">Pricing</Link></li>

          <li className="dropdown">
            <Link to="#">Team</Link>
            <div className="dropdown-btn" onClick={() => toggleSubDropdown("team")}>
              <i className="fa fa-angle-down"></i>
            </div>
            {renderSubMenu([
              { label: "Team List", to: "/page-team" },
              { label: "Team Details", to: "/page-team-details" },
            ], "team")}
          </li>

          <li className="dropdown">
            <Link to="#">Shop</Link>
            <div className="dropdown-btn" onClick={() => toggleSubDropdown("shop")}>
              <i className="fa fa-angle-down"></i>
            </div>
            {renderSubMenu([
              { label: "Products", to: "/shop-products" },
              { label: "Products with Sidebar", to: "/shop-products-sidebar" },
              { label: "Product Details", to: "/shop-product-details" },
              { label: "Cart", to: "/shop-cart" },
              { label: "Checkout", to: "/shop-checkout" },
            ], "shop")}
          </li>

          <li><Link to="/page-testimonial">Testimonials</Link></li>
          <li><Link to="/page-404">404</Link></li>
        </ul>
      </li>

      {/* Services */}
      <li className="dropdown">
        <Link to="#">Services</Link>
        <div className="dropdown-btn" onClick={() => toggleDropdown("services")}>
          <i className="fa fa-angle-down"></i>
        </div>
        <ul className="sub-menu" style={{ display: activeDropdown === "services" ? "block" : "none" }}>
          <li><Link to="/page-services">Services</Link></li>
          <li><Link to="/page-service-details">Services Details</Link></li>
        </ul>
      </li>

      {/* Portfolio */}
      <li className="dropdown">
        <Link to="#">Portfolio</Link>
        <div className="dropdown-btn" onClick={() => toggleDropdown("portfolio")}>
          <i className="fa fa-angle-down"></i>
        </div>
        <ul className="sub-menu" style={{ display: activeDropdown === "portfolio" ? "block" : "none" }}>
          <li><Link to="/page-case">Portfolio</Link></li>
          <li><Link to="/page-case-details">Portfolio Details</Link></li>
        </ul>
      </li>

      {/* News */}
      <li className="dropdown">
        <Link to="#">News</Link>
        <div className="dropdown-btn" onClick={() => toggleDropdown("news")}>
          <i className="fa fa-angle-down"></i>
        </div>
        <ul className="sub-menu" style={{ display: activeDropdown === "news" ? "block" : "none" }}>
          <li><Link to="/news-grid">News Grid</Link></li>
          <li><Link to="/news-details">News Details</Link></li>
        </ul>
      </li>

      <li><Link to="/page-contact">Contact</Link></li>
    </ul>
  );
};

export default MobileMenu;
