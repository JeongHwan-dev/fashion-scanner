import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { useTranslation } from 'react-i18next';
import { LangContext } from 'context/LanguageContext';
import 'components/commonComponents/css/Navigation.css';

const Navigation = () => {
  const history = useHistory();
  const isMobile = useMediaQuery({ maxWidth: 500 });
  const [menu, setMenu] = useState(false); // 햄버거 버튼
  const { setEng, setKor } = useContext(LangContext); // 전역으로 상태 관리: 현재 언어, 영어로 지정, 한국어로 지정
  const { t } = useTranslation();

  const onMoveMain = () => {
    history.push('/');
  };

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
                <a href="#section__introduction" onClick={onMoveMain}>
                  {t('nav1')}
                </a>
              </li>
              <li>
                <a href="#section__lookbook" onClick={onMoveMain}>
                  {t('nav2')}
                </a>
              </li>
              <li>
                <a href="#section__memberMatching" onClick={onMoveMain}>
                  {t('nav3')}
                </a>
              </li>
              <li>
                <a href="#section__request" onClick={onMoveMain}>
                  {t('nav4')}
                </a>
              </li>
              {isMobile && (
                <>
                  <li className="lang__a">
                    <a
                      className={`lang ${localStorage.i18nextLng === 'ko' ? 'active' : ''}`}
                      onClick={setKor}
                    >
                      KOR
                    </a>
                    <span>|</span>
                    <a
                      className={`lang ${localStorage.i18nextLng === 'en' ? 'active' : ''}`}
                      onClick={setEng}
                    >
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
                  <li
                    className={`lang ${localStorage.i18nextLng === 'ko' ? 'active' : ''}`}
                    onClick={setKor}
                  >
                    KOR
                  </li>
                  <span>|</span>
                  <li
                    className={`lang ${localStorage.i18nextLng === 'en' ? 'active' : ''}`}
                    onClick={setEng}
                  >
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
