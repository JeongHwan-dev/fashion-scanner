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
            <img src="/images/lookbook_logo.png" alt="BLACKPINK LOOKBOOK" />
            <span>멤버들을 클릭하여 룩북을 확인해보세요.</span>
          </div>
          <div className="lookbook__members">
            <a onClick={onMoveJisoo}>
              <img className="member" src="/images/jisoo_btn_photo.jpg" alt="JISOO" />
            </a>
            <a onClick={onMoveJennie}>
              <img className="member" src="/images/jennie_btn_photo.jpg" alt="JENNIE" />
            </a>
            <a onClick={onMoveLisa}>
              <img className="member" src="/images/lisa_btn_photo.jpg" alt="LISA" />
            </a>
            <a onClick={onMoveRose}>
              <img className="member" src="/images/rose_btn_photo.jpg" alt="ROSE" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Lookbook;