import React from 'react';
import Navigation from 'components/commonComponents/Navigation';
import Footer from 'components/commonComponents/Footer';
import loadingVideo from 'videos/Loading.mov';
import 'routes/css/Loading.css';
import { useMediaQuery } from 'react-responsive';

const Loading = () => {
  const isMobile = useMediaQuery({
    query: '(max-width: 375px)'
  });
  // console.log(isMobile);

  return (
    <>
      {/* HEADER */}
      {/* <Navigation /> */}
      {!isMobile ? <Navigation /> : null}
      {/* LOADING PAGE */}
      <div className="loading">
        <div className="loading__title">
          <h3>Loading</h3>
          <span>.</span>
          <span>.</span>
          <span>.</span>
        </div>
        <div className="loading__video">
          <video autoPlay loop muted>
            <source src={loadingVideo} type="video/mp4" />
          </video>
        </div>
      </div>
      {/* FOOTER */}
      {/* <Footer /> */}
      {!isMobile ? <Footer /> : null}
    </>
  );
};

export default Loading;
