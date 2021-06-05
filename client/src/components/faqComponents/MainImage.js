import React from 'react';
import 'components/faqComponents/css/MainImage.css';
import { useMediaQuery } from 'react-responsive';

const MainImage = ({ blackpink, isMobile }) => {
  return (
    <section className="faqmain" id="section__faq">
      <div className="faqmain__inner">
        <div className="fagmain__inner__wrapper">
          {!blackpink && !isMobile ? (
            <>
              <div className="faqmain__team__img">
                <img src="/images/devTeam/devTeam_photo1.jpg" alt="team" />
              </div>
            </>
          ) : (
            // 모바일 버전에서는 블랙핑크 이미지만 보이게 함
            <>
              <div className="faqmain__inner__bg">
                <h2>FASHION</h2>
                <h2>SCANNER</h2>
                <h2>BLACK</h2>
                <h2>PINK</h2>
                <div className="faqmain__img__bg"></div>
                <div className="faqmain__img">
                  <img src="/images/faq/faq_main_blackpink.png" alt="main image" />
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default MainImage;
