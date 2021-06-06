import React, { createContext, useState } from 'react';
import { useTranslation } from "react-i18next";

export const LangContext = createContext();

export default ({ children }) => {
  const { i18n } = useTranslation();
  const [currentLang, setCurrentLang] = useState("ko");
  const setEng = () => {
    i18n.changeLanguage('en');
    setCurrentLang('en');
  };
  const setKor = () => {
    i18n.changeLanguage('ko');
    setCurrentLang('ko');
  }

  const language = {currentLang, setEng, setKor};
  
  return <LangContext.Provider value={language}>{children}</LangContext.Provider>
}