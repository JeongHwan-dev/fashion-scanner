import React, { useRef } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useTranslation } from 'react-i18next';
import useOnScreen from 'hooks/useOnScreen';
import intro from 'videos/intro.mp4';
import 'components/homeComponents/css/Introduction.css';

const Introduction = () => {
  const isMobile = useMediaQuery({ maxWidth: 500 });
  const imageRef = useRef(null);
  const isVisible = useOnScreen(imageRef);
  const { t } = useTranslation('introduction');

  return (
    <>
      <section className="introduction" id="section__introduction" ref={imageRef}>
        <div className="introduction__inner">
          <video
            muted
            autoPlay
            loop
            playsInline
            className={`introduction__bg ${isVisible ? 'scroll' : ''}`}
          >
            <source src={intro} type="video/mp4"></source>
          </video>
          <ul>
            <li className={`introduction__title ${isVisible ? 'scroll' : ''}`}>
              <h2>{t('introduction_title')}</h2>
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
                    {t('introduction_dsc1')}
                    <br />
                    {t('introduction_dsc2')}
                  </p>
                </>
              ) : (
                <>
                  <p>
                    {t('m-introduction_dsc1')}
                    <br />
                    {t('m-introduction_dsc2')}
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
