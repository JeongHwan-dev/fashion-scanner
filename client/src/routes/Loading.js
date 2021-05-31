import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navigation from 'components/commonComponents/Navigation';
import Footer from 'components/commonComponents/Footer';
import loadingVd from 'videos/loading_vd.mov';
import 'routes/css/Loading.css';

const Loading = () => {
  const url = `http://elice-kdt-ai-track-vm-ai-13.koreacentral.cloudapp.azure.com:8000`;

  return (
    <>
      <div className="loading">
        <Navigation />
        <div className="loading__inner">
          <video autoPlay loop muted>
            <source src={loadingVd} type="video/mp4" />
          </video>
          테스트
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Loading;
