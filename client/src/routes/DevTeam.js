import React from 'react';
import Navigation from 'components/commonComponents/Navigation';
import DevTeamTitle from 'components/devTeamComponents/DevTeamTitle';
import DevTeamSub from 'components/devTeamComponents/DevTeamSub';
import Cultures from 'components/devTeamComponents/Cultures';
import Footer from 'components/commonComponents/Footer';
import 'routes/css/DevTeam.css';

const DevTeam = () => {
  return (
    <>
      <div className="devTeam">
        <Navigation />
        <div className="devTeam__inner">
          {/* 01: DEV TEAM TITLE */}
          <DevTeamTitle />
          {/* 02: DEV TEAM SUB */}
          <DevTeamSub />
          {/* 03: MEMBERS'S CULTURES */}
          <Cultures />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default DevTeam;
