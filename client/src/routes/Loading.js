import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navigation from 'components/commonComponents/Navigation';
import Footer from 'components/commonComponents/Footer';
import loadingVideo from 'videos/Loading.mov';
import 'routes/css/Loading.css';
import { useMediaQuery } from 'react-responsive';

const Loading = () => {
  const url = `http://elice-kdt-ai-track-vm-ai-13.koreacentral.cloudapp.azure.com:8000`;
  const [status, setStatus] = useState(false);
  const isMobile = useMediaQuery({
    query: '(max-width: 375px)',
  });

  // useEffect(() => {
  //   setInterval(() => {
  //     getStatus();
  //   }, 2000);

  //   if (status === 201) {
  //     console.log('pass');
  //   } else {
  //     console.log('wait');
  //   }
  // }, []);

  const getStatus = async () => {
    await axios.get(url + '/matching/loading').then((response) => {
      console.log(response);
      if (response.status === 200) {
        console.log('ok!');
      }
    });
  };

  return (
    <>
      <Navigation />
      {!isMobile ? <Navigation /> : null}
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
