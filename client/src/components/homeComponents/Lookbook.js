import React from 'react';
import { useHistory } from 'react-router-dom';
import 'components/homeComponents/css/Lookbook.css';

const Lookbook = () => {
  const history = useHistory();

  const onMoveJisoo = () => {
    history.push({
      pathname: '/lookbook/jisoo',
      state: 3,
    });
  };

  const onMoveJennie = () => {
    history.push({
      pathname: '/lookbook/jennie',
      state: 1,
    });
  };

  const onMoveRose = () => {
    history.push({
      pathname: '/lookbook/rose',
      state: 2,
    });
  };

  const onMoveLisa = () => {
    history.push({
      pathname: '/lookbook/lisa',
      state: 4,
    });
  };

  return (
    <>
      <section className="lookbook" id="section__lookbook">
        <div className="lookbook__inner">
          <div className="lookbook__title">
            <img src={require('images/lookbook_logo.png').default} alt="BLACKPINK LOOKBOOK" />
          </div>
          <div className="lookbook__members">
            <a onClick={onMoveJisoo}>
              <img className="member" src={require('images/jisoo_photo.jpg').default} alt="JISOO" />
            </a>
            <a onClick={onMoveJennie}>
              <img
                className="member"
                src={require('images/jennie_photo.jpg').default}
                alt="JENNIE"
              />
            </a>
            <a onClick={onMoveLisa}>
              <img className="member" src={require('images/lisa_photo.jpg').default} alt="LISA" />
            </a>
            <a onClick={onMoveRose}>
              <img className="member" src={require('images/rose_photo.jpg').default} alt="ROSE" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Lookbook;
