import Footer from 'components/commonComponents/Footer';
import Navigation from 'components/commonComponents/Navigation';
import MainImage from 'components/faqComponents/MainImage';
import Questions from 'components/faqComponents/Questions';
import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';

const FAQ = () => {
  const [blackpink, setBlackpink] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 390 });

  return (
    <>
      <Navigation />
      {/* 01 : MAIN IMAGE */}
      <MainImage blackpink={blackpink} isMobile={isMobile} />
      {/* 02 : QUESTIONS */}
      <Questions blackpink={blackpink} setBlackpink={setBlackpink} />
      <Footer />
    </>
  );
};

export default FAQ;
