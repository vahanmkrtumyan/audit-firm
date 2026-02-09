import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./i18n"; // Initialize i18n
import Home1 from "./pages/index";
import Home1Single from "./pages/index-1-single";
import Home1Dark from "./pages/index-1-dark";
import Home2 from "./pages/index-2";
import Home2Single from "./pages/index-2-single";
import Home2Dark from "./pages/index-2-dark";
import Home3 from "./pages/index-3";
import Home3Single from "./pages/index-3-single";
import Home3Dark from "./pages/index-3-dark";
import Home4 from "./pages/index-4";
import Home4Single from "./pages/index-4-single";
import Home4Dark from "./pages/index-4-dark";
import Home5 from "./pages/index-5";
import Home5Single from "./pages/index-5-single";
import Home5Dark from "./pages/index-5-dark";
import Home6 from "./pages/index-6";
import Home6Single from "./pages/index-6-single";
import Home6Dark from "./pages/index-6-dark";
import Home7 from "./pages/index-7";
import Home7Single from "./pages/index-7-single";
import Home7Dark from "./pages/index-7-dark";
import NewsDetails from "./pages/news-details";
import NewsGrid from "./pages/news-grid";
import PageError from "./pages/page-404";
import PageAbout from "./pages/page-about";
import PageContact from "./pages/page-contact";
import PageFaq from "./pages/page-faq";
import PagePricing from "./pages/page-pricing";
import PageCaseDetails from "./pages/page-case-details";
import PageCase from "./pages/page-case";
import PageServiceDetails from "./pages/page-service-details";
import PageServices from "./pages/page-services";
import PageTeamDetails from "./pages/page-team-details";
import PageTeam from "./pages/page-team";
import PageTestimonial from "./pages/page-testimonial";
import ShopCart from "./pages/shop-cart";
import ShopCheckout from "./pages/shop-checkout";
import ShopProductDetails from "./pages/shop-product-details";
import ShopSidebar from "./pages/shop-products-sidebar";
import ShopProducts from "./pages/shop-products";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home1 />} />
        <Route path="/index-1-single" element={<Home1Single />} />
        <Route path="/index-1-dark" element={<Home1Dark />} />
        <Route path="/index-2" element={<Home2 />} />
        <Route path="/index-2-single" element={<Home2Single />} />
        <Route path="/index-2-dark" element={<Home2Dark />} />
        <Route path="/index-3" element={<Home3 />} />
        <Route path="/index-3-single" element={<Home3Single />} />
        <Route path="/index-3-dark" element={<Home3Dark />} />
        <Route path="/index-4" element={<Home4 />} />
        <Route path="/index-4-single" element={<Home4Single />} />
        <Route path="/index-4-dark" element={<Home4Dark />} />
        <Route path="/index-5" element={<Home5 />} />
        <Route path="/index-5-single" element={<Home5Single />} />
        <Route path="/index-5-dark" element={<Home5Dark />} />
        <Route path="/index-6" element={<Home6 />} />
        <Route path="/index-6-single" element={<Home6Single />} />
        <Route path="/index-6-dark" element={<Home6Dark />} />
        <Route path="/index-7" element={<Home7 />} />
        <Route path="/index-7-single" element={<Home7Single />} />
        <Route path="/index-7-dark" element={<Home7Dark />} />
        <Route path="/news-details" element={<NewsDetails />} />
        <Route path="/news-grid" element={<NewsGrid />} />
        <Route path="*" element={<PageError />} />
        <Route path="/news-grid" element={<NewsGrid />} />
        <Route path="/page-about" element={<PageAbout />} />
        <Route path="/page-contact" element={<PageContact />} />
        <Route path="/page-faq" element={<PageFaq />} />
        <Route path="/page-pricing" element={<PagePricing />} />
        <Route path="/page-case-details" element={<PageCaseDetails />} />
        <Route path="/page-case" element={<PageCase />} />
        <Route path="/page-service-details" element={<PageServiceDetails />} />
        <Route path="/page-services" element={<PageServices />} />
        <Route path="/page-team-details" element={<PageTeamDetails />} />
        <Route path="/page-team" element={<PageTeam />} />
        <Route path="/page-testimonial" element={<PageTestimonial />} />
        <Route path="/shop-cart" element={<ShopCart />} />
        <Route path="/shop-checkout" element={<ShopCheckout />} />
        <Route path="/shop-product-details" element={<ShopProductDetails />} />
        <Route path="/shop-products-sidebar" element={<ShopSidebar />} />
        <Route path="/shop-products" element={<ShopProducts />} />
      </Routes>
    </Router>
  );
}

export default App;
