import React, { useEffect } from 'react';
import Navigation from 'components/commonComponents/Navigation';
import MatchingTitle from 'components/matchingComponents/MatchingTitle';
import Picture from 'components/matchingComponents/Picture';
import Footer from 'components/commonComponents/Footer';
import 'routes/css/Matching.css';

const Matching = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="matching">
        {/* HEADER */}
        <Navigation />
        {/* SECTIONS */}
        {/* 01: MATCHING TITLE */}
        <MatchingTitle />
        {/* 02: PICTURE */}
        <Picture />
        {/* FOOTER */}
        <Footer />
      </div>
    </>
  );
};

export default Matching;
