import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay} from "swiper/modules";
import "swiper/css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ServiceImage1 from '../../assets/images/shape/service-shape.png';
import ServiceImage2 from '../../assets/images/shape/service-line.png';
import ServiceImage3 from '../../assets/images/shape/service-arry.png';
import ServiceImage4 from '../../assets/images/shape/service-item-shape.png';
import ServiceImage5 from '../../assets/images/service/service-image1.jpg';
import ServiceImage6 from '../../assets/images/service/service-image2.jpg';
import ServiceImage7 from '../../assets/images/service/service-image3.jpg';

const swiperOptions = {
    modules: [Autoplay],
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    spaceBetween: 30,
    speed: 1000,
    loop: true,
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        991: {
            slidesPerView: 2,
        },
        1399: {
            slidesPerView: 3,
        },
    },
};

function Service() {
    const { t } = useTranslation();

  return (
    <>
    <section id="service" className="service-section pt-120 pb-120">
      <figure className="sec-shape">
        <img src={ServiceImage1} alt="Image" />
      </figure>
      <div className="sec-line">
        <img className="animation__arryUpDown" src={ServiceImage2} alt="Image" />
      </div>
      <div className="container">

        <div className="sec-title mb-50">
          <h6 className="sub-title wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">{t("services")}</h6>
          {/* <div className="flex-content">
            <Link className="btn-one wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms" to="/page-services">All Services</Link>
            <figure className="arry wow bounceInRight" data-wow-delay="200ms" data-wow-duration="1500ms">
              <img className="animation__arryLeftRight" src={ServiceImage3} alt="Image" />
            </figure>
          </div> */}
        </div>

        <div className="swiper service-slider">
          <Swiper {...swiperOptions} className="swiper-wrapper">
            <SwiperSlide className="swiper-slide">
              <div className="service-block">
                <Link className="arry-btn" to="/services/audit"><i className="fa-regular fa-arrow-up-right"></i></Link>
                <div className="content-box">
                  <figure className="shape">
                    <img src={ServiceImage4} alt="Image" />
                  </figure>
                  <div className="content">
                    <h4 className="title"><Link to="/services/audit">{t("audit")}</Link></h4>
                  </div>
                </div>
                <div className="image-box">
                  <figure className="image">
                    <img src={ServiceImage5} alt="Image" />
                  </figure>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="swiper-slide">
              <div className="service-block">
                <Link className="arry-btn" to="/services/accounting"><i className="fa-regular fa-arrow-up-right"></i></Link>
                <div className="content-box">
                  <figure className="shape">
                    <img src={ServiceImage4} alt="Image" />
                  </figure>
                  <div className="content">
                    <h4 className="title"><Link to="/services/accounting">{t("accounting")}</Link></h4>
                  </div>
                </div>
                <div className="image-box">
                  <figure className="image">
                    <img src={ServiceImage6} alt="Image" />
                  </figure>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="swiper-slide">
              <div className="service-block">
                <Link className="arry-btn" to="/services/financial"><i className="fa-regular fa-arrow-up-right"></i></Link>
                <div className="content-box">
                  <figure className="shape">
                    <img src={ServiceImage4} alt="Image" />
                  </figure>
                  <div className="content">
                    <h4 className="title"><Link to="/services/financial">{t("financial")}</Link></h4>
                  </div>
                </div>
                <div className="image-box">
                  <figure className="image">
                    <img src={ServiceImage7} alt="Image" />
                  </figure>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="swiper-slide">
              <div className="service-block">
                <Link className="arry-btn" to="/services/legal"><i className="fa-regular fa-arrow-up-right"></i></Link>
                <div className="content-box">
                  <figure className="shape">
                    <img src={ServiceImage4} alt="Image" />
                  </figure>
                  <div className="content">
                    <h4 className="title"><Link to="/services/legal">{t("legal")}</Link></h4>
                  </div>
                </div>
                <div className="image-box">
                  <figure className="image">
                    <img src={ServiceImage5} alt="Image" />
                  </figure>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="swiper-slide">
              <div className="service-block">
                <Link className="arry-btn" to="/services/training"><i className="fa-regular fa-arrow-up-right"></i></Link>
                <div className="content-box">
                  <figure className="shape">
                    <img src={ServiceImage4} alt="Image" />
                  </figure>
                  <div className="content">
                    <h4 className="title"><Link to="/services/legal">{t("legal")}</Link></h4>
                  </div>
                </div>
                <div className="image-box">
                  <figure className="image">
                    <img src={ServiceImage6} alt="Image" />
                  </figure>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="swiper-slide">
              <div className="service-block">
                <Link className="arry-btn" to="/services/training"><i className="fa-regular fa-arrow-up-right"></i></Link>
                <div className="content-box">
                  <figure className="shape">
                    <img src={ServiceImage4} alt="Image" />
                  </figure>
                  <div className="content">
                    <h4 className="title"><Link to="/services/training">{t("training")}</Link></h4>
                  </div>
                </div>
                <div className="image-box">
                  <figure className="image">
                    <img src={ServiceImage7} alt="Image" />
                  </figure>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
    </>
  );
}

export default Service;
