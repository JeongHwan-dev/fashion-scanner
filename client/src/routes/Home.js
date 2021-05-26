import React from 'react';
import Navigation from 'components/commonComponents/Navigation';
import Footer from 'components/commonComponents/Footer';
import Title from 'components/homeComponents/Title';
import Introduction from 'components/homeComponents/Introduction';
import Magazine from 'components/homeComponents/Magazine';
import BpVideo from 'components/homeComponents/BpVideo';
import Lookbook from 'components/homeComponents/Lookbook';
import Matching from 'components/homeComponents/Matching';
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
