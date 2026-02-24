import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import LanguageSelector from "./LanguageSelector";

function Navigation() {
  const { t } = useTranslation();
  return (
    <ul className="navigation">
      <li className="dropdown">
        <Link to="/">{t("home")}</Link>
      </li>
      <li className="dropdown">
        <Link to="#">{t("pages")}</Link>
        <div className="dropdown-btn">
          <i className="fa fa-angle-down"></i>
        </div>
        <ul>
          <li>
            <Link to="/page-about">{t("about")}</Link>
          </li>
          <li>
            <Link to="/page-faq">{t("faq")}</Link>
          </li>
          <li>
            <Link to="/page-pricing">{t("pricing")}</Link>
          </li>
          <li className="dropdown">
            <Link to="#">{t("team")}</Link>
            <ul>
              <li>
                <Link to="/page-team">{t("teamList")}</Link>
              </li>
              <li>
                <Link to="/page-team-details">{t("teamDetails")}</Link>
              </li>
            </ul>
          </li>
          {/* <li className="dropdown">
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
          </li> */}
          <li>
            <Link to="/page-testimonial">{t("testimonials")}</Link>
          </li>
          {/* <li>
            <Link to="/page-404">404</Link>
          </li> */}
        </ul>
      </li>
      <li className="dropdown">
        <Link to="#">{t("services")}</Link>
        <div className="dropdown-btn">
          <i className="fa fa-angle-down"></i>
        </div>
        <ul>
          <li>
            <Link to="/page-services">{t("servicesList")}</Link>
          </li>
          <li>
            <Link to="/page-service-details">{t("serviceDetails")}</Link>
          </li>
        </ul>
      </li>
      {/* <li className="dropdown">
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
      </li> */}
      {/* <li className="dropdown">
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
      </li> */}
      <li>
        <Link to="/page-contact">{t("contact")}</Link>
      </li>
      <li>
        <Link to="/page-about">{t("about")}</Link>
      </li>
      <li className="language-nav-item">
        <LanguageSelector />
      </li>
    </ul>
  );
}

export default Navigation;
