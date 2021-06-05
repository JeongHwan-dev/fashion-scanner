import React from 'react';
import 'components/lookbookComponents/css/MobileOthers.css';

const MobileOthers = () => {
  return (
    <>
      <section className="m-others">
        <div className="m-others__inner">
          <div className="m-others__title">
            <h2>CHECK OUT</h2>
            <h2>THE OTHER MEMBERS</h2>
          </div>
          <div className="m-others__others">
            <a href="/lookbook/jennie">
              <img src="/images/matching/jennie_card.jpg" alt="jennie" />
            </a>
            <a href="/lookbook/jisoo">
              <img src="/images/matching/jisoo_card.jpg" alt="jisoo" />
            </a>
            <a href="/lookbook/lisa">
              <img src="/images/matching/lisa_card.jpg" alt="lisa" />
            </a>
            <a href="/lookbook/rose">
              <img src="/images/matching/rose_card.jpg" alt="rose" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default MobileOthers;
