import React, { useContext, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import 'components/commonComponents/css/Navigation.css';
import { LangContext } from 'context/LanguageContext';

const Navigation = () => {
  const isMobile = useMediaQuery({ maxWidth: 375 });
  // const [korean, setKorean] = useState(true);
  const [menu, setMenu] = useState(false); // hamburger button
  const { korean, setKorean } = useContext(LangContext);
  // console.log(lang.korean) // {korean: true, setKorean: ƒ}
  // console.log(korean) // true
  // console.log(setKorean)
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
                <a href="/#section__introduction">{korean? "서비스 소개": "OUR SERVICE"}</a>
              </li>
              <li>
                <a href="/#section__lookbook">{korean? "룩북": "LOOKBOOK"}</a>
              </li>
              <li>
                <a href="/#section__memberMatching">{korean? "멤버 매칭": "WHO AM I"}</a>
              </li>
              <li>
                <a href="/#section__request">{korean? "요청하기": "SERVICE REQUEST"}</a>
              </li>
            </ul>
          </div>
          <div className="language-group">
            <ul className="language">
              {!isMobile ? (
                <>
                  <li
                    onClick={() => {
                      setKorean(true);
                    }}
                  >
                    KOR
                  </li>
                  <span>|</span>
                  <li
                    onClick={() => {
                      setKorean(false);
                    }}
                  >
                    ENG
                  </li>
                </>
              ) : (
                <>
                  {korean ? (
                    <li onClick={() => setKorean(false)}>EN</li>
                  ) : (
                    <li onClick={() => setKorean(true)}>KOR</li>
                  )}
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
