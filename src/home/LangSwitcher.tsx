import { ChangeEvent } from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = (e: ChangeEvent<HTMLInputElement>) => {
    const newLanguage = e.target.checked ? "en" : "ru";
    i18n.changeLanguage(newLanguage);
  };

  return (
    <label className="inline-flex items-center cursor-pointer">
      <span className="me-3 ">RU</span>
      <input
        type="checkbox"
        value=""
        className="sr-only peer"
        onChange={toggleLanguage}
        checked={i18n.language == "en"}
      />
      <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all "></div>
      <span className="ms-3 ">EN</span>
    </label>
  );
};

export default LanguageSwitcher;
