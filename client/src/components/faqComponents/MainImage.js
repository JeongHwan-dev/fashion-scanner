import React from 'react';

const MainImage = () => {
  return (
    <section className="faqmain" id="section__faq">
      <div className="faqmain__inner">
        <div className="faqmain__inner__bg">
          <h2>FASHION</h2>
          <h2>SCANNER</h2>
          <div className="faqmain__image__bg"></div>
          <img src={require('images/faq_main.png').default} alt="main image" />
          <h2>BLACK</h2>
          <h2>PINK</h2>
        </div>
      </div>
    </section>
  );
}

export default MainImage;