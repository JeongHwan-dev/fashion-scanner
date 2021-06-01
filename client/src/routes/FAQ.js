import Footer from 'components/commonComponents/Footer';
import Navigation from 'components/commonComponents/Navigation';
import MainImage from 'components/faqComponents/MainImage';
import Questions from 'components/faqComponents/Questions';
import React, { useState } from 'react';

const FAQ = () => {
  const [blackpink, setBlackpink] = useState(false);

  return (
    <>
      {/* HEADER */}
      <Navigation />
      {/* MAIN IMAGE */}
      <MainImage blackpink={blackpink} />
      {/* QUESTIONS */}
      <Questions blackpink={blackpink} setBlackpink={setBlackpink} />
      {/* FOOTER */}
      <Footer />
    </>
  );
};

export default FAQ;
