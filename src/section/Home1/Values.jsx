import { useTranslation } from "react-i18next";

import AboutImage1 from "../../assets/images/about/about-image1.jpg";
import AboutImage3 from "../../assets/images/about/about-image2.jpg";

function Values() {
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
                  <h6 className="sub-title">{t("values")}</h6>
                 
                  <p className="text">
                    {t("valuesText1")}
                  </p>
                    <p className="text">
                    {t("valuesText2")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Values;
