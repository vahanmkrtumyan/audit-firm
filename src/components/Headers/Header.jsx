import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";
import NavLinks from '../NavLinks';
import MobileMenu from '../MobileMenu';
import MainLogo from '../../assets/images/logo.png';
import DarkLogo from "../../assets/images/logo-light.png";
import StickyLogo from '../../assets/images/logo.png';
import MobileLogo from '../../assets/images/logo-light.png';

const Header = ({ handleOpen, handleRemove, searchToggle, handleToggle, scroll }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const {  t } = useTranslation();

        useEffect(() => {
            const checkDarkMode = () => {
            const hasDarkClass = document.body.classList.contains('dark-mode');
            setIsDarkMode(hasDarkClass);
        };
        checkDarkMode();
        const observer = new MutationObserver(checkDarkMode);
            observer.observe(document.body, {
            attributes: true,
            attributeFilter: ['class'],
        });
        return () => observer.disconnect();
    }, []);

    return (
        <>
            <header className={`main-header header-style-one ${scroll ? "fixed-header" : ""} ${searchToggle ? "moblie-search-active" : ""}`}>
            {/* Header Top */}
          
            {/* <!-- Header Top --> */}

            {/* <!-- Main box --> */}
            <div className="main-box">
                <div className="logo-box">
                    <div className="logo">
                        <Link to="/">
                            <img src={isDarkMode ? DarkLogo : MainLogo} alt="Image" title="Consultez"/>
                        </Link>
                    </div>
                </div>
                {/* Nav Box */}
                <div className="nav-outer">
                    <nav className="nav main-menu">
                        <NavLinks />
                    </nav>
                    {/* Main Menu End */}
                </div>
                <div className="outer-box">
                    <div className="info-box">
                        <div className="call-info">
                        <i className="fa-solid fa-phone ring__animation"/>
                        <div>
                            <h6 className="title">{t("phone")}:</h6>
                            <Link to="/">012 210 001</Link>
                        </div>
                        </div>
                    </div>
                    <div className="mobile-nav-toggler d-block d-lg-none" onClick={handleOpen}><i className="icon lnr-icon-bars"/></div>
                    {/* Mobile Nav toggler */}
                </div>
            </div>
            <div className="auto-container">
                {/* Mobile Menu */}
                <div className="mobile-menu">
                <div className="menu-backdrop" onClick={handleRemove} />
                <nav className="menu-box">
                    <div className="upper-box">
                    <div className="nav-logo"><Link to="/"><img src={MobileLogo} alt="Image"/></Link></div>
                    <div className="close-btn" onClick={handleRemove}><i className="icon fa fa-times"/></div>
                    </div>
                <ul className="navigation clearfix d-block d-lg-none">
                    <MobileMenu/>
                </ul>
                <div className="content-box d-none d-lg-block">
                    <h4 className="title">{t("aboutUs")}</h4>
                    <p className="text">Consultez is the go-to hub for early adopters and innovation enthusiasts, offering cutting technology widely.</p>
                </div>
                    <ul className="contact-list-one">
                    <li>
                        <div className="contact-info-box">
                        <i className="icon lnr-icon-phone-handset"/>
                        <span className="title">Call Now</span>
                        <Link to="/">+92 (8800) - 98670</Link>
                        </div>
                    </li>
                    <li>
                        <div className="contact-info-box">
                        <span className="icon lnr-icon-envelope1"></span>
                        <span className="title">Send Email</span>
                        <Link to="/">help@company.com</Link>
                        </div>
                    </li>
                    <li>
                        <div className="contact-info-box">
                        <span className="icon lnr-icon-clock"></span>
                        <span className="title">Send Email</span>
                        Mon - Sat 8:00 - 6:30, Sunday - CLOSED
                        </div>
                    </li>
                    </ul>
                    <ul className="social-links">
                    <li><Link to="/"><i className="fab fa-x-twitter"/></Link></li>
                    <li><Link to="/"><i className="fab fa-facebook-f"/></Link></li>
                    <li><Link to="/"><i className="fab fa-pinterest"/></Link></li>
                    <li><Link to="/"><i className="fab fa-instagram"/></Link></li>
                    </ul>
                </nav>
                </div>
                <div className="search-popup">
                <span className="search-back-drop" onClick={handleToggle}></span>
                <button className="close-search" onClick={handleToggle}><span className="fa fa-times"></span></button>
                <div className="search-inner">
                    <form method="post" action="/">
                        <div className="form-group">
                            <input type="search" name="search-field" placeholder="Search..." required=""/>
                            <button type="submit"><i className="fa fa-search"/></button>
                        </div>
                    </form>
                </div>
                </div>
                {/* <!-- End Header Search --> */}

                {/* <!-- Sticky Header  --> */}
                <div className={`sticky-header ${scroll ? "fixed-header animated slideInDown" : ""}`}>
                <div className="auto-container">
                    <div className="inner-container">
                    <div className="logo">
                        <Link to="/">
                            <img src={isDarkMode ? DarkLogo : StickyLogo} alt="Logo"/>
                        </Link>
                    </div>
                    <div className="nav-outer">
                        <nav className="main-menu">
                        <div className="navbar-collapse show collapse clearfix">
                            <ul className="navigation clearfix">
                            <NavLinks/>
                            </ul>
                        </div>
                        </nav>
                        {/* <!--Mobile Navigation Toggler--> */}
                        <div className="mobile-nav-toggler" onClick={handleOpen}><span className="icon lnr-icon-bars"></span></div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </header>
        </>
    );
};

export default Header;