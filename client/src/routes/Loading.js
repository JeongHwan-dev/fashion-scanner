import Footer from 'components/commonComponents/Footer';
import Navigation from 'components/commonComponents/Navigation';
import React from 'react';
import 'routes/css/Loading.css';
import loadingVideo from 'videos/Loading.mov';

const Loading = () => {
  return (
    <>
      {/* HEADER */}
      <Navigation />
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
      <Footer />
    </>
  );
};

export default Loading;
