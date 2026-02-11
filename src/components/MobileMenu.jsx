import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const MobileMenu = () => {
  const { t } = useTranslation();

  return (
    <ul className="navigation">
      <li>
        <Link to="/">{t("home")}</Link>
      </li>
      <li>
        <Link to="/page-about">{t("about")}</Link>
      </li>
      <li>
        <Link to="/page-services">{t("services")}</Link>
      </li>
      <li>
        <Link to="/page-case">{t("portfolio")}</Link>
      </li>
      <li>
        <Link to="/news-grid">{t("news")}</Link>
      </li>
      <li>
        <Link to="/page-faq">{t("faq")}</Link>
      </li>
      <li>
        <Link to="/page-pricing">{t("pricing")}</Link>
      </li>
      <li>
        <Link to="/page-contact">{t("contact")}</Link>
      </li>
    </ul>
  );
};

export default MobileMenu;
