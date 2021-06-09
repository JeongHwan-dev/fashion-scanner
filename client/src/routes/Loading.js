import React, { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import Navigation from 'components/commonComponents/Navigation';
import Footer from 'components/commonComponents/Footer';
import loadingVideo from 'videos/Loading.mov';
import 'routes/css/Loading.css';

const Loading = () => {
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    setInterval(() => {
      history.push({
        pathname: '/matching/result',
        state: {
          matchingResultKo: location.state.matchingResultKo,
          matchingResultEn: location.state.matchingResultEn,
        },
      });
    }, 5000);
  }, []);

  return (
    <>
      <Navigation />
      {/* 01: LOADING PAGE */}
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
      <Footer />
    </>
  );
};

export default Loading;
