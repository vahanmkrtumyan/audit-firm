import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import FooterImg2 from '../../assets/images/shape/globe-right.png';

function Footer2() {
    const { t } = useTranslation();
    return (
        <>
        <footer className="main-footer footer-style-two">
            <div className="container">
                <div className="widgets-section">
                    <div className="row g-5 justify-content-between">
                        <div className="col-sm-12 col-lg-4 col-xl-6">                            
                            <div className="footer-widget about-widget">
                                <div className="sec-title mb-40">
                                    <h2 className="title text-white">{t("readyToDiscover")}</h2>
                                   
                                </div>
                             
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-5 col-xl-3">
                        <div className="footer-widget links-widget">
                            <h4 className="widget-title">{t("services")}</h4>
                            <div className="widget-content">
                                <ul className="user-links">
                                    <li><Link to="/services/audit">{t("audit")}</Link></li>
                                    <li><Link to="/services/accounting">{t("accounting")}</Link></li>
                                    <li><Link to="/services/financial">{t("financial")}</Link></li>
                                    <li><Link to="/services/business-consulting">{t("businessConsulting")}</Link></li>
                                    <li><Link to="/services/legal">{t("legal")}</Link></li>
                                    <li><Link to="/services/training">{t("training")}</Link></li>
                                </ul>
                            </div>
                        </div>
                        </div>
                        <div className="col-sm-6 col-lg-3 col-xl-3">
                        <div className="footer-widget contact-widget">
                            <h4 className="widget-title">{t("location")}</h4>
                            <div className="widget-content">
                            <h5 className="text">{t("locationText")}</h5>
                            </div>
                            <h4 className="widget-title mt-30">{t("contact")}</h4>
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
