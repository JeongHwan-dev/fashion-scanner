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
        <div className="failure__inner">
          <FailCard />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Failure;
