import { Link } from 'react-router-dom';
import FooterImg2 from '../../assets/images/shape/globe-right.png';

function Footer2() {
    return (
        <>
        <footer className="main-footer footer-style-two">
            <div className="container">
                <div className="widgets-section">
                    <div className="row g-5 justify-content-between">
                        <div className="col-sm-12 col-lg-5 col-xl-6">                            
                            <div className="footer-widget about-widget">
                                <div className="sec-title mb-40">
                                    <h2 className="title text-white">Ready Discover More? Contact Us Today!</h2>
                                   
                                </div>
                             
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-3 col-xl-2">
                        <div className="footer-widget links-widget">
                            <h4 className="widget-title">Services</h4>
                            <div className="widget-content">
                                <ul className="user-links">
                                    <li><Link to="/">Business Plan</Link></li>
                                    <li><Link to="/">Growth Strategy</Link></li>
                                    <li><Link to="/">Strategic planning</Link></li>
                                    <li><Link to="/">Workflow Automation</Link></li>
                                    <li><Link to="/">Lead Generation</Link></li>
                                    <li><Link to="/">Financial Planning</Link></li>
                                </ul>
                            </div>
                        </div>
                        </div>
                        <div className="col-sm-6 col-lg-4 col-xl-3">
                        <div className="footer-widget contact-widget">
                            <h4 className="widget-title">Locations</h4>
                            <div className="widget-content">
                            <h5 className="text">Գյուլբենկյան փողոց, 27 շենք, 5/1 տարածք</h5>
                            </div>
                            <h4 className="widget-title mt-30">Contact</h4>
                            <div className="widget-content">
                            <Link to="/">info@tvs.am </Link>
                            <h4 className="text">012 210 001</h4>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <ul className="footer-nav">
                        <li><Link to="#"><i className="fa-brands fa-facebook-f"/></Link></li>
                        <li><Link to="#"><i className="fa-solid fa-x"/></Link></li>
                    </ul>
                </div>
            </div>
            <div className="sec-shape">
                <img className="animation__rotateAndScale" src={FooterImg2} alt="Image"/>
            </div>
            </footer>
        </>
    );
}

export default Footer2;
