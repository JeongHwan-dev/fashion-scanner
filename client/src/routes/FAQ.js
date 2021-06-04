import Footer from 'components/commonComponents/Footer';
import Navigation from 'components/commonComponents/Navigation';
import MainImage from 'components/faqComponents/MainImage';
import Questions from 'components/faqComponents/Questions';
import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';

const FAQ = () => {
  const [blackpink, setBlackpink] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 375 });
  // console.log(isMobile)

  return (
    <>
      {/* HEADER */}
      <Navigation />
      {/* MAIN IMAGE */}
      <MainImage blackpink={blackpink} isMobile={isMobile} />
      {/* QUESTIONS */}
      <Questions blackpink={blackpink} setBlackpink={setBlackpink} />
      {/* FOOTER */}
      <Footer />
    </>
  );
};

export default FAQ;
