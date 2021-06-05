import React from 'react';
import Navigation from 'components/commonComponents/Navigation';
import FailCard from 'components/matchingComponents/FailCard';
import Footer from 'components/commonComponents/Footer';
import 'routes/css/Failure.css';

const Failure = () => {
  return (
    <>
      <div className="failure">
        <Navigation />
        <FailCard />
        <Footer />
      </div>
    </>
  );
};

export default Failure;
