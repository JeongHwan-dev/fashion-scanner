import React from 'react';
import 'components/HomeComponents/css/Lookbook.css';

const Lookbook = () => {
  return (
    <>
      <section className="lookbook">
        <div className="lookbook__inner">
          <div className="lookbook__title">
            <img src={require('images/lookbook_logo.png').default} alt="BLACKPINK LOOKBOOK" />
          </div>
          <div className="lookbook__members">
            <a href="javascript:void(0)">
              <img className="member" src={require('images/jisu_photo.jpg').default} alt="JISU" />
            </a>
            <a href="javascript:void(0)">
              <img
                className="member"
                src={require('images/jennie_photo.jpg').default}
                alt="JENNIE"
              />
            </a>
            <a href="javascript:void(0)">
              <img className="member" src={require('images/lisa_photo.jpg').default} alt="LISA" />
            </a>
            <a href="javascript:void(0)">
              <img className="member" src={require('images/rose_photo.jpg').default} alt="ROSE" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Lookbook;
