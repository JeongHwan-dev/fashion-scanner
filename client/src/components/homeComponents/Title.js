import React from 'react';
import { useMediaQuery } from 'react-responsive';
import background from 'videos/background.mp4';
import 'components/homeComponents/css/Title.css';

const Title = () => {
  const isMobile = useMediaQuery({ maxWidth: 500 });
  return (
    <>
      <section className="title" id="section__title">
        <div className="title__inner">
          {!isMobile ? (
            <>
              <img src="/images/home/fs_s1_logo.png" alt="FASHION SCANNER" />
              <h2>DISCOVER THE NEW TRENDS</h2>
            </>
          ) : (
            <>
              <img src="/images/home/m_fs_s1_logo1.png" alt="FASHION SCANNER" />
              <img src="/images/home/m_fs_s1_logo2.png" alt="FASHION SCANNER" />
              <h2>DISCOVER THE NEW TRENDS</h2>
            </>
          )}
        </div>
        <video muted autoPlay loop placeinline="true" id="bg-video">
          <source src={background} type="video/mp4" />
        </video>
      </section>
    </>
  );
};

export default Title;
