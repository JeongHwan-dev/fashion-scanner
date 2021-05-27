import React from 'react';
import 'components/commonComponents/css/Navigation.css';

const Navigation = () => {
  const handleScroll = () => {
    window.scroll({
      top: 2000,
      behavior: 'smooth',
    });
  };

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
                <a href="javascript:void(0)" onClick={handleScroll}>
                  서비스 소개
                </a>
              </li>
              <li>
                <a href="javascript:void(0)">룩북</a>
              </li>
              <li>
                <a href="javascript:void(0)">멤버 매칭</a>
              </li>
              <li>
                <a href="javascript:void(0)">요청하기</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navigation;
