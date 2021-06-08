import React, { useContext, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import 'components/commonComponents/css/Navigation.css';
import { LangContext } from 'context/LanguageContext';
import { useTranslation } from 'react-i18next';

const Navigation = () => {
  const isMobile = useMediaQuery({ maxWidth: 375 });
  const [menu, setMenu] = useState(false); // 햄버거 버튼
  const { currentLang, setEng, setKor } = useContext(LangContext); // 전역으로 상태 관리: 현재 언어, 영어로 지정, 한국어로 지정
  const { t } = useTranslation();

  return (
    <>
      <header>
        <nav className="inner">
          <a href="/" className="logo">
            <img src="/images/common/fs_s3_logo.png" alt="FASHION SCANNER" />
          </a>
          <span
            className="material-icons"
            onClick={() => {
              setMenu(!menu);
            }}
          >
            menu
          </span>
          <div className={`link-group ${menu === true ? 'active' : ''}`}>
            <ul className="link">
              <li>
                <a href="/#section__introduction">{t('nav1')}</a>
              </li>
              <li>
                <a href="/#section__lookbook">{t('nav2')}</a>
              </li>
              <li>
                <a href="/#section__memberMatching">{t('nav3')}</a>
              </li>
              <li>
                <a href="/#section__request">{t('nav4')}</a>
              </li>
              {isMobile && (
                <>
                  <li className="lang__a">
                    <a className={`lang ${currentLang === 'ko' ? 'active' : ''}`} onClick={setKor}>
                      KOR
                    </a>
                    <span>|</span>
                    <a className={`lang ${currentLang === 'en' ? 'active' : ''}`} onClick={setEng}>
                      ENG
                    </a>
                  </li>
                </>
              )}
            </ul>
          </div>
          <div className="language-group">
            <ul className="language">
              {!isMobile && (
                // pc 화면일 때 나오는 다국어
                <>
                  <li className={`lang ${currentLang === 'ko' ? 'active' : ''}`} onClick={setKor}>
                    KOR
                  </li>
                  <span>|</span>
                  <li className={`lang ${currentLang === 'en' ? 'active' : ''}`} onClick={setEng}>
                    ENG
                  </li>
                </>
              )}
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navigation;
