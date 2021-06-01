import React from 'react';
import 'components/commonComponents/css/Navigation.css';

const Navigation = () => {
  return (
    <>
      <header>
        <nav className="inner">
          <a href="/" className="logo">
            <img src={require('images/fs_logo.png').default} alt="FASHION SCANNER" />
          </a>
          <div className="link-group">
            <ul className="link">
              <li>
                <a href="#section__introduction">서비스 소개</a>
              </li>
              <li>
                <a href="#section__lookbook">룩북</a>
              </li>
              <li>
                <a href="#section__memberMatching">멤버 매칭</a>
              </li>
              <li>
                <a href="#section__request">요청하기</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navigation;
