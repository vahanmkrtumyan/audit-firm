import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./LanguageSelector.css";

// Flag SVG components
const ArmenianFlag = () => (
  <svg viewBox="0 0 32 24" className="flag-icon">
    <rect width="32" height="8" y="0" fill="#D90012" />
    <rect width="32" height="8" y="8" fill="#0033A0" />
    <rect width="32" height="8" y="16" fill="#F2A800" />
  </svg>
);

const EnglishFlag = () => (
  <svg viewBox="0 0 32 24" className="flag-icon">
    <rect width="32" height="24" fill="#012169" />
    <path d="M0,0 L32,24 M32,0 L0,24" stroke="#fff" strokeWidth="2.4" />
    <path d="M0,0 L32,24 M32,0 L0,24" stroke="#C8102E" strokeWidth="1.6" />
    <path d="M16,0 V24 M0,12 H32" stroke="#fff" strokeWidth="4" />
    <path d="M16,0 V24 M0,12 H32" stroke="#C8102E" strokeWidth="2.4" />
  </svg>
);

const RussianFlag = () => (
  <svg viewBox="0 0 32 24" className="flag-icon">
    <rect width="32" height="8" y="0" fill="#FFFFFF" />
    <rect width="32" height="8" y="8" fill="#0033A0" />
    <rect width="32" height="8" y="16" fill="#D52B1E" />
  </svg>
);

const languages = [
  { code: "hy", name: "Հայերեն", Flag: ArmenianFlag },
  { code: "en", name: "English", Flag: EnglishFlag },
  { code: "ru", name: "Русский", Flag: RussianFlag },
];

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const currentLang =
    languages.find((l) => l.code === i18n.language) || languages[0];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (langCode) => {
    i18n.changeLanguage(langCode);
    setIsOpen(false);
  };

  return (
    <div className="language-selector" ref={dropdownRef}>
      <button
        className="language-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-label="Select language"
      >
        <currentLang.Flag />
        <span className="lang-code">{currentLang.code.toUpperCase()}</span>
        <i className={`fa fa-angle-down ${isOpen ? "rotated" : ""}`}></i>
      </button>

      {isOpen && (
        <ul className="language-dropdown">
          {languages.map(({ code, name, Flag }) => (
            <li
              key={code}
              className={`language-option ${i18n.language === code ? "active" : ""}`}
              onClick={() => handleSelect(code)}
            >
              <Flag />
              <span className="lang-name">{name}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageSelector;
