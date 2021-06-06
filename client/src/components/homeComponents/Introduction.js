import React, { useRef } from 'react';
import { useMediaQuery } from 'react-responsive';
import useOnScreen from 'hooks/useOnScreen';
import 'components/homeComponents/css/Introduction.css';
import intro from 'videos/intro.mp4';

const Introduction = () => {
  const imageRef = useRef(null);
  const isVisible = useOnScreen(imageRef);
  const isMobile = useMediaQuery({ maxWidth: 375 });

  return (
    <>
      <section className="introduction" id="section__introduction" ref={imageRef}>
        <div className="introduction__inner">
          <video autoPlay muted loop className={`introduction__bg ${isVisible ? 'scroll' : ''}`}>
            <source src={intro} type="video/mp4"></source>
          </video>
          <ul>
            <li className={`introduction__title ${isVisible ? 'scroll' : ''}`}>
              <h2>케이팝 스타들의 패션을 스캔합니다</h2>
            </li>
            <li className={`introduction__keyword ${isVisible ? 'scroll' : ''}`}>
              {!isMobile ? (
                <>
                  <span>#AI</span>
                  <span>#IMAGE_SCANNING</span>
                  <span>#FASHION</span>
                  <span>#K-POP_STAR</span>
                </>
              ) : (
                <>
                  <span>#AI</span>
                  <span>#IMAGE_SCANNING</span>
                  <br />
                  <span>#FASHION</span>
                  <span>#K-POP_STAR</span>
                </>
              )}
            </li>
            <li className={`introduction__logos ${isVisible ? 'scroll' : ''}`}>
              <div>
                <img src="/images/home/ai_logo.png" alt="AI" />
                <p>AI</p>
              </div>
              <div>
                <img src="/images/home/scanner_logo.png" alt="Scanner" />
                <p>Scanning</p>
              </div>
              <div>
                <img src="/images/home/fashion_logo.png" alt="Fashion" />
                <p>Fashion</p>
              </div>
            </li>
            <li className={`introduction__dsc ${isVisible ? 'scroll' : ''}`}>
              {!isMobile ? (
                <>
                  <p>
                    패션 스캐너는 업계에서 가장 HOT 한 케이팝 스타들의 패션을 분석합니다.
                    <br />
                    패션 전문 인공지능과 함께 새로운 패션 트렌드를 확인해보세요.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    패션 스캐너는 업계에서 가장 HOT한
                    <br />
                    케이팝 스타들의 패션을 분석합니다.
                  </p>
                </>
              )}
            </li>
          </ul>
          <a className={`material-icons ${isVisible ? 'scroll' : ''}`} href="#section__magazine">
            expand_more
          </a>
        </div>
      </section>
    </>
  );
};

export default Introduction;
