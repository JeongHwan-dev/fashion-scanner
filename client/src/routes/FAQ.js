import Footer from 'components/commonComponents/Footer';
import Navigation from 'components/commonComponents/Navigation';
import MainImage from 'components/faqComponents/MainImage';
import Questions from 'components/faqComponents/Questions';
import React from 'react';

const FAQ = () => {

  return (
    <>
    {/* HEADER */}
    <Navigation />
    {/* MAIN IMAGE */}
    <MainImage />
    {/* QUESTIONS */}
    <Questions />
    {/* FOOTER */}
    {/* <Footer /> */}
    </>
  );
}

export default FAQ;