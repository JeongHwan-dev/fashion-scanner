import React from 'react';
import fashionIcon from 'videos/fashionIcon.mp4';
import 'components/homeComponents/css/BpVideo.css';

const BpVideo = () => {
  return (
    <>
      <section className="bpVideo">
        <video autoPlay muted loop>
          <source src={fashionIcon} type="video/mp4" />
        </video>
      </section>
    </>
  );
};

export default BpVideo;
