import React from 'react';
import Navigation from 'components/commonComponents/Navigation';
import MatchingTitle from 'components/matchingComponents/MatchingTitle';
import Picture from 'components/matchingComponents/Picture';
import Footer from 'components/commonComponents/Footer';
import 'routes/css/Matching.css';

const Matching = () => {
  return (
    <>
      <div className="matching">
        <Navigation />
        {/* 01: MATCHING TITLE */}
        <MatchingTitle />
        {/* 02: PICTURE */}
        <Picture />
        <Footer />
      </div>
    </>
  );
};

export default Matching;
