import React from 'react';
import 'components/homeComponents/css/Introduction.css';

const Introduction = () => {
  return (
    <>
      <section className="introduction" id="section__introduction">
        <div className="introduction__inner">
          <ul>
            <li className="introduction__title">
              <h2>셀럽들의 패션을 스캔합니다</h2>
            </li>
            <li className="introduction__keyword">
              <span>#AI</span>
              <span>#IMAGE_SCANNING</span>
              <span>#FASHION</span>
              <span>#CELEBRITY</span>
            </li>
            <li className="introduction__logos">
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
            <li className="introduction__dsc">
              <p>
                {/* 패션 스케너는 인공지능 기술을 이용한 이미지 스캐닝 서비스입니다. */}
                패션스캐너는 업계에서 가장 HOT 한 셀러브리티의 패션을 분석합니다.
                <br />
                {/* 셀럽들의 패션 스타일을 분석하여 사용자들에게 유사한 패션 스타일을 제시합니다. */}
                패션 전문 인공지능과 함께 새로운 패션 트렌드를 확인해보세요.
              </p>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Introduction;
