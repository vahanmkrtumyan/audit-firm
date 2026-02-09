import React from "react";
import { Link } from 'react-router-dom';
import FooterLogo from '../../assets/images/logo-light.png';
import FooterShapeImage from '../../assets/images/shape/footer-one-shape.png';

function Footer({ handleOpen, searchToggle, }) {
    return (
        <>
        <footer id="contact" className={`main-footer footer-style-one ${searchToggle ? "moblie-search-active" : ""}`}>
            <div className="outer-box">
                <div className="footer-left">
                <div className="logo">
                    <Link to="/"><img src={FooterLogo} alt="Logo"/></Link>
                </div>
                <button className="back-top-btn mobile-nav-toggler" onClick={handleOpen}>
                    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="1.5" cy="1.5" r="1.5" fill="white" />
                    <circle cx="1.5" cy="9.5" r="1.5" fill="white" />
                    <circle cx="1.5" cy="17.5" r="1.5" fill="white" />
                    <circle cx="9.5" cy="1.5" r="1.5" fill="white" />
                    <circle cx="9.5" cy="9.5" r="1.5" fill="white" />
                    <circle cx="9.5" cy="17.5" r="1.5" fill="white" />
                    <circle cx="17.5" cy="1.5" r="1.5" fill="white" />
                    <circle cx="17.5" cy="9.5" r="1.5" fill="white" />
                    <circle cx="17.5" cy="17.5" r="1.5" fill="white" />
                    </svg>
                </button>
                </div>
                <div className="row g-0 w-100">
                <div className="col-xl-8 left-column order-2 order-xl-1">
                    <div className="footer-top">
                    <div className="row g-4">
                        <div className="col-lg-4">
                        <div className="info-item">
                            <ul>
                            <li><i className="fa-sharp fa-solid fa-phone"/></li>
                            <li>
                                <span>Call Us:</span>
                                <h5 className="title">+1-2345-2345-54</h5>
                            </li>
                            </ul>
                        </div>
                        </div>
                        <div className="col-lg-4">
                        <div className="info-item">
                            <ul>
                            <li><i className="fa-sharp fa-solid fa-envelope"/></li>
                            <li>
                                <span>Email Us:</span>
                                <h5 className="title">info@help.com</h5>
                            </li>
                            </ul>
                        </div>
                        </div>
                        <div className="col-lg-4">
                        <div className="info-item">
                            <ul>
                            <li><i className="fa-sharp fa-solid fa-location-dot"/></li>
                            <li>
                                <span>Hours:</span>
                                <h5 className="title">Daily: 8 AM to 5 PM</h5>
                            </li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="widgets-section">
                    <div className="row g-4">
                        <div className="col-lg-4 footer-column">
                        <div className="footer-widget links-widget">
                            <h4 className="widget-title">Services</h4>
                            <div className="widget-content">
                            <ul className="user-links">
                                <li><Link to="/">Digital Marketing</Link></li>
                                <li><Link to="/">Innovation Space</Link></li>
                                <li><Link to="/">Competitive Analysis</Link></li>
                                <li><Link to="/">Market Research</Link></li>
                                <li><Link to="/">HR Management</Link></li>
                            </ul>
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-4 footer-column">
                        <div className="footer-widget links-widget">
                            <h4 className="widget-title">Pages</h4>
                            <div className="widget-content">
                            <ul className="user-links">
                                <li><Link to="/">Our Blog</Link></li>
                                <li><Link to="/">Success Stories</Link></li>
                                <li><Link to="/">Customers Review</Link></li>
                                <li><Link to="/">Contact Us</Link></li>
                                <li><Link to="/">About Us</Link></li>
                            </ul>
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-4 footer-column">
                        <div className="footer-widget links-widget">
                            <h4 className="widget-title">Signup Newsletter</h4>
                            <div className="input-field">
                           
                            </div>
                            <ul className="footer-nav">
                            <li><Link to="/"><i className="fa-brands fa-facebook-f"/></Link></li>
                            <li><Link to="/"><i className="fa-solid fa-x"/></Link></li>
                            <li><Link to="/"><i className="fa-brands fa-vimeo-v"/></Link></li>
                            <li><Link to="/"><i className="fa-brands fa-pinterest-p"/></Link></li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="footer-bottom">
                    <p className="copyright-text">© Copyright 2025. All Right by <Link to="#0">Kodesolution</Link></p>
                    </div>
                </div>
                <div className="col-xl-4 right-column order-1 order-xl-2">
                    <div className="inner-column">
                    <h3 className="title">Have a Project in
                        your Mind?</h3>
                    <Link className="circle-btn" to="/page-contact">Contact Us <i className="fa-regular fa-arrow-up-right"/></Link>
                    <div className="mt-10">
                        <h5 className="time">09 : 00 AM - 10 : 30 PM</h5>
                        <h5 className="date">Saturday - Thursday</h5>
                    </div>
                    </div>
                    <div className="shape">
                    <img src={FooterShapeImage} alt="Image"/>
                    </div>
                </div>
                </div>
            </div>
        </footer>
        </>
    );
}

export default Footer;
