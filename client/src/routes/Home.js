import React from 'react';
import Navigation from 'components/commonComponents/Navigation';
import Title from 'components/homeComponents/Title';
import Introduction from 'components/homeComponents/Introduction';
import Magazine from 'components/homeComponents/Magazine';
import BpVideo from 'components/homeComponents/BpVideo';
import Lookbook from 'components/homeComponents/Lookbook';
import MemberMatching from 'components/homeComponents/MemberMatching';
import Request from 'components/homeComponents/Request';
import Footer from 'components/commonComponents/Footer';

const Home = () => {
  return (
    <>
      <div className="home">
        <Navigation />
        {/* 01: TITLE */}
        <Title />
        {/* 02: INTRODUCTION */}
        <Introduction />
        {/* 03: MAGAZINE */}
        <Magazine />
        {/* 04: BLACKPINK VIDEO */}
        <BpVideo />
        {/* 05: LOOKBOOK */}
        <Lookbook />
        {/* 06: MEMBERMATCHING */}
        <MemberMatching />
        {/* 07: REQUEST */}
        <Request />
        <Footer />
      </div>
    </>
  );
};

export default Home;
