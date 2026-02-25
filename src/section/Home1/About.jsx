import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import AboutImage1 from "../../assets/images/about/about-image1.jpg";
import AboutImage3 from "../../assets/images/about/about-image2.jpg";
import AboutImage4 from "../../assets/images/about/about-user.png";

function About() {
  const { t } = useTranslation();
  return (
    <section id="about" className="about-section pt-120 pb-120 paralax__animation">
      <div className="container">
        <div className="row g-5">
          {/* Left column: images */}
          <div className="col-lg-6 image-column">
            <div className="inner-column">
              <div className="image1 overlay-anim">
                <img src={AboutImage1} alt="Team Discussion" />
              </div>
              {/* <div className="info animation__arryLeftRight">
                <img src={AboutImage2} alt="About Info Graphic" />
              </div> */}
              <div className="image2 overlay-anim">
                <img src={AboutImage3} alt="Office Environment" />
              </div>
            </div>
          </div>

          {/* Right column: content */}
          <div className="col-lg-6 content-column">
            <div className="inner-column">
              <div className="content-box">
                <div className="sec-title">
                  <h6 className="sub-title">{t("aboutUs")}</h6>
                 
                  <p className="text">
                    {t("aboutText1")}
                  </p>
                    <p className="text">
                    {t("aboutText2")}
                  </p>
                    <p className="text">
                    {t("aboutText3")}
                  </p>
                </div>
              </div>

              {/* Footer info */}
              <div className="info mt-50">
                <Link to="/page-services" className="btn-two">
                  Find Services
                </Link>
                <div className="user">
                  <div className="image">
                    <img src={AboutImage4} alt="Founder Portrait" />
                  </div>
                  <div>
                    <p className="sub-title">Founder</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
