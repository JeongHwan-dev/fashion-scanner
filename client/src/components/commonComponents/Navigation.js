import React from 'react';
import 'components/commonComponents/css/Navigation.css';

const Navigation = () => {
  // 섹션들의 Y 좌표
  const sectionY = {
    introY: 1018,
    lookbookY: 4240,
    matchingY: 5354,
    requestY: 6507,
  };

  // 스크롤 핸들러
  const onScrollHandler = (y) => {
    window.scroll({
      top: y,
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
                <a onClick={() => onScrollHandler(sectionY.introY)}>서비스 소개</a>
              </li>
              <li>
                <a onClick={() => onScrollHandler(sectionY.lookbookY)}>룩북</a>
              </li>
              <li>
                <a onClick={() => onScrollHandler(sectionY.matchingY)}>멤버 매칭</a>
              </li>
              <li>
                <a onClick={() => onScrollHandler(sectionY.requestY)}>요청하기</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navigation;
