import React from 'react';
import 'components/homeComponents/css/Lookbook.css';

const Lookbook = () => {
  return (
    <>
      <section className="lookbook" id="section__lookbook">
        <div className="lookbook__inner">
          <div className="lookbook__title">
            <img src="/images/home/lookbook_logo.png" alt="BLACKPINK LOOKBOOK" />
            <span>멤버들을 클릭하여 룩북을 확인해보세요.CHECK</span>
          </div>
          <div className="lookbook__members">
            <a href="/lookbook/jisoo">
              <img className="member" src="/images/home/jisoo_btn_photo.jpg" alt="JISOO" />
            </a>
            <a href="/lookbook/jennie">
              <img className="member" src="/images/home/jennie_btn_photo.jpg" alt="JENNIE" />
            </a>
            <a href="/lookbook/lisa">
              <img className="member" src="/images/home/lisa_btn_photo.jpg" alt="LISA" />
            </a>
            <a href="/lookbook/rose">
              <img className="member" src="/images/home/rose_btn_photo.jpg" alt="ROSE" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Lookbook;
