import React from 'react';
import 'routes/css/Home.css';
import background from 'videos/background.mp4';
import magazine from 'videos/magazine.mp4';
import fashionIcon from 'videos/fashionIcon.mp4';

const Home = () => {
  return (
    <>
      {/* HEADER */}
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
      {/* SECTIONS */}
      <section>
        {/* SECTION 01: INTRODUCTION */}
        <div className="section__introduction">
          <video autoPlay muted loop id="background__video">
            <source src={background} type="video/mp4" />
          </video>
          <ul>
            <li>
              <img src={require('images/fs_logo2.png').default} alt="FASHION SCANNER" />
            </li>
            <li>
              <span>#AI</span>
              <span>#IMAGE_SCANNER</span>
              <span>#CELEBRITY</span>
              <span>#FASHION</span>
            </li>
            <li>
              <div>
                <img src={require('images/ai_logo.png').default} alt="AI" />
                <p>AI</p>
              </div>
              <div>
                <img src={require('images/scanner_logo.png').default} alt="Scanner" />
                <p>Scanner</p>
              </div>
              <div>
                <img src={require('images/fashion_logo.png').default} alt="Fashion" />
                <p>Fashion</p>
              </div>
            </li>
            <li>
              패션 스케너는 인공지능 기술을 이용한 이미지 스캐닝 서비스입니다.
              <br />
              셀럽들의 패션 스타일을 분석하여 사용자들에게 유사한 패션 스타일을 제시합니다.
            </li>
          </ul>
        </div>
        {/* SECTION 02: MAGAZINE */}
        <div className="section__magazine">
          <video autoPlay muted>
            <source src={magazine} type="video/mp4" />
          </video>
          <div>
            <ul>
              <li>
                <img src={require('images/blackpink_logo.png').default} alt="BLACKPINK" />
              </li>
              <li>
                명품 브랜드가 블랙핑크와 사랑에 빠졌다. 한류 콘텐츠의 힘이 커지면서 블랙핑크의
                매력이 글로벌하게 인정받게 되고 그녀들의 패션 스타일은 큰 영향력을 끼치고 있다.
                <br />
                이에 4명의 멤버 모두 세계적 명품 브랜드의 앰버서더로 활동하고 있다.
                <br />
                제니는 샤넬 하우스 글로벌 엠버서더, 지수는 디올의 뷰티 로컬 엠버서더, 로제는
                생로랑의 글로벌 앰버서더, 리사는 셀린느의 글로벌 엠버서더와 뮤즈로 활동 중이다.
              </li>
            </ul>
          </div>
        </div>
        {/* SECTION 03: VIDEO */}
        <div className="section__fashionIcon">
          <video autoPlay muted loop>
            <source src={fashionIcon} type="video/mp4" />
          </video>
        </div>
        {/* SECTION 04: LOOKBOOK */}
        <div className="section__lookbook">
          <ul>
            <li>
              <img src={require('images/lookbook_logo.png').default} alt="BLACKPINK LOOKBOOK" />
            </li>
            <li>
              <div className="members">
                <a href="/">
                  <img src={require('images/jisu_photo.jpg').default} alt="JISU Photo" />
                </a>
                <a href="/">
                  <img src={require('images/jennie_photo.jpg').default} alt="JENNIE Photo" />
                </a>
                <a href="/">
                  <img src={require('images/lisa_photo.jpg').default} alt="LISA Photo" />
                </a>
                <a href="/">
                  <img src={require('images/rose_photo.jpg').default} alt="ROSE Photo" />
                </a>
              </div>
            </li>
          </ul>
        </div>
        {/* SECTION 05: WHICH MEMBER ARE YOU */}
        <div className="section__member">
          <div className="inner">
            <div className="member__description">
              <img src={require('images/member_logo1.png').default} alt="WHICH MEMBER" />
              <img src={require('images/member_logo2.png').default} alt="ARE YOU?" />
              <p>
                본인의 평소 입는 스타일의 옷을 업로드해보세요.
                <br />
                AI가 어떤 멤버와 패션 성향이 가장 비슷한지 알려드립니다.
              </p>
              <button>바로가기</button>
            </div>
            <img src={require('images/group_photo.png').default} alt="GROUP Photo" />
          </div>
        </div>
      </section>
      {/* FOOTER */}
      <footer>
        <div className="inner"></div>
      </footer>
    </>
  );
};

export default Home;
