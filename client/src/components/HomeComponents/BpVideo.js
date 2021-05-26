import React from 'react';
import fashionIcon from 'videos/fashionIcon.mp4';

const BpVideo = () => {
  return (
    <>
      <section className="section__fashionIcon">
        <video autoPlay muted loop>
          <source src={fashionIcon} type="video/mp4" />
        </video>
      </section>
    </>
  );
};

export default BpVideo;
