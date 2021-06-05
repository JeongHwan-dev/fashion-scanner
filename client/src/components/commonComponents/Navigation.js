import React, { useState } from 'react';
import 'components/commonComponents/css/Navigation.css';
import { useMediaQuery } from 'react-responsive';

const Navigation = () => {
  const isMobile = useMediaQuery({ maxWidth: 375 });
  const [korean, setKorean] = useState(true);
  const [menu, setMenu] = useState(false);

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
                <a href="/#section__introduction">서비스 소개</a>
              </li>
              <li>
                <a href="/#section__lookbook">룩북</a>
              </li>
              <li>
                <a href="/#section__memberMatching">멤버 매칭</a>
              </li>
              <li>
                <a href="/#section__request">요청하기</a>
              </li>
            </ul>
          </div>
          <div className="language-group">
            <ul className="language">
              {!isMobile ? (
                <>
                  <li>
                    <a href="#">KOR</a>
                  </li>
                  <span>|</span>
                  <li>
                    <a href="#">ENG</a>
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
