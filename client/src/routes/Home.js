import React from 'react';
import Navigation from 'components/commonComponents/Navigation';
import Footer from 'components/commonComponents/Footer';
import Title from 'components/HomeComponents/Title';
import Introduction from 'components/HomeComponents/Introduction';
import Magazine from 'components/HomeComponents/Magazine';
import BpVideo from 'components/HomeComponents/BpVideo';
import Lookbook from 'components/HomeComponents/Lookbook';
import Matching from 'components/HomeComponents/Matching';
import 'routes/css/Home.css';

const Home = () => {
  return (
    <>
      {/* HEADER */}
      <Navigation />
      {/* SECTIONS */}
      {/* 01: TITLE SECTION */}
      <Title />
      {/* 02: INTRODUCTION */}
      <Introduction />
      {/* 03: MAGAZINE */}
      <Magazine />
      {/* 04: BPVIDEO */}
      <BpVideo />
      {/* 05: LOOKBOOK */}
      <Lookbook />
      {/* 06: MATCHING */}
      <Matching />
      {/* FOOTER */}
      <Footer />
    </>
  );
};

export default Home;
