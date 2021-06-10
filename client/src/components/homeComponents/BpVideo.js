import React from 'react';
import fashionIcon from 'videos/fashionIcon.mp4';
import 'components/homeComponents/css/BpVideo.css';

const BpVideo = () => {
  return (
    <>
      <section className="bpVideo" id="section__bpVideo">
        <div className="bpVideo__inner">
          <video controls muted autoPlay loop placeinline="true">
            <source src={fashionIcon} type="video/mp4" />
          </video>
        </div>
      </section>
    </>
  );
};

export default BpVideo;
