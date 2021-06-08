import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import fashionIcon from 'videos/fashionIcon.mp4';
import 'components/homeComponents/css/BpVideo.css';

const BpVideo = () => {
  const [isPlayed, setIsPlayed] = useState(false);

  const onPlayHandler = () => {
    setIsPlayed(!isPlayed);
    console.log(isPlayed);
  };

  return (
    <>
      <section className="bpVideo" id="section__bpVideo">
        <div className="bpVideo__inner">
          <video controls autoPlay loop muted>
            <source src={fashionIcon} type="video/mp4" />
          </video>
        </div>
      </section>
    </>
  );
};

export default BpVideo;
