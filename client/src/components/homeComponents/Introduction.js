import React from 'react';
import 'components/homeComponents/css/Introduction.css';

const Introduction = () => {
  return (
    <>
      <section className="introduction" id="section__introduction">
        <div className="introduction__inner">
          <ul>
            <li className="introduction__title">
              <h2>케이팝 스타들의 패션을 스캔합니다</h2>
            </li>
            <li className="introduction__keyword">
              <span>#AI</span>
              <span>#IMAGE_SCANNING</span>
              <span>#FASHION</span>
              <span>#K-POP_STAR</span>
            </li>
            <li className="introduction__logos">
              <div>
                <img src={require('images/ai_logo.png').default} alt="AI" />
                <p>AI</p>
              </div>
              <div>
                <img src={require('images/scanner_logo.png').default} alt="Scanner" />
                <p>Scanning</p>
              </div>
              <div>
                <img src={require('images/fashion_logo.png').default} alt="Fashion" />
                <p>Fashion</p>
              </div>
            </li>
            <li className="introduction__dsc">
              <p>
                패션스캐너는 업계에서 가장 HOT 한 케이팝 스타들의 패션을 분석합니다.
                <br />
                패션 전문 인공지능과 함께 새로운 패션 트렌드를 확인해보세요.
              </p>
            </li>
          </ul>
          <a className="material-icons" href="#section__magazine">
            expand_more
          </a>
        </div>
      </section>
    </>
  );
};

export default Introduction;
