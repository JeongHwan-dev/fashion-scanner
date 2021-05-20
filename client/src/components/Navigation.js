import React from 'react';
import 'components/css/Navigation.css';

// 네비게이션 컴포넌트
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
                <a href="/">서비스 소개</a>
              </li>
              <li>
                <a href="/">룩북</a>
              </li>
              <li>
                <a href="/">당신의 패션은 어떤 멤버?</a>
              </li>
              <li>
                <a href="/">요청하기</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navigation;
