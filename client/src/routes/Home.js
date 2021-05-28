import React from 'react';
import Navigation from 'components/commonComponents/Navigation';
<<<<<<< HEAD
import Title from 'components/homeComponents/Title';
import Introduction from 'components/homeComponents/Introduction';
import Magazine from 'components/homeComponents/Magazine';
import BpVideo from 'components/homeComponents/BpVideo';
import Lookbook from 'components/homeComponents/Lookbook';
import MemberMatching from 'components/homeComponents/MemberMatching';
import Request from 'components/homeComponents/Request';
import Footer from 'components/commonComponents/Footer';
=======
import Footer from 'components/commonComponents/Footer';
import Title from 'components/HomeComponents/Title';
import Introduction from 'components/HomeComponents/Introduction';
import Magazine from 'components/HomeComponents/Magazine';
import BpVideo from 'components/HomeComponents/BpVideo';
import Lookbook from 'components/HomeComponents/Lookbook';
import Matching from 'components/HomeComponents/Matching';
import 'routes/css/Home.css';
>>>>>>> 0b9c445b268fede987b11a66eec5a0b8a287d01f

const Home = () => {
  return (
    <>
      <div className="home">
        {/* HEADER */}
        <Navigation />
        {/* SECTIONS */}
        {/* 01: TITLE */}
        <Title />
        {/* 02: INTRODUCTION */}
        <Introduction />
        {/* 03: MAGAZINE */}
        <Magazine />
        {/* 04: BPVIDEO */}
        <BpVideo />
        {/* 05: LOOKBOOK */}
        <Lookbook />
        {/* 06: MEMBERMATCHING */}
        <MemberMatching />
        {/* 07: REQUEST */}
        <Request />
        {/* FOOTER */}
        <Footer />
      </div>
    </>
  );
};

export default Home;
