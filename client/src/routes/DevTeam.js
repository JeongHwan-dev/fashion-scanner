import React, { useEffect } from 'react';
import Navigation from 'components/commonComponents/Navigation';
import DevTeamTitle from 'components/devTeamComponents/DevTeamTitle';
import DevTeamSub from 'components/devTeamComponents/DevTeamSub';
import Cultures from 'components/devTeamComponents/Cultures';
import Footer from 'components/commonComponents/Footer';
import 'routes/css/DevTeam.css';

const DevTeam = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="devTeam">
        <Navigation />
        <div className="devTeam__inner">
          <DevTeamTitle />
          <DevTeamSub />
          <Cultures />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default DevTeam;
