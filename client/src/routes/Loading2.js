import React from 'react';
import Navigation from 'components/commonComponents/Navigation';
import Footer from 'components/commonComponents/Footer';
import loadingVideo from 'videos/Loading.mov';
import 'routes/css/Loading2.css';

const Loading2 = () => {
  return (
    <>
      {/* HEADER */}
      <div className="loading2">
        <Navigation />
        {/* LOADING PAGE */}
        <div className="loading__inner">
          <div className="loading__title2">
            <p>Loading</p>
            <span>.</span>
            <span>.</span>
            <span>.</span>
          </div>
          <video autoPlay loop muted>
            <source src={loadingVideo} type="video/mp4" />
          </video>
        </div>
        {/* FOOTER */}
        <Footer />
      </div>
    </>
  );
};

export default Loading2;
