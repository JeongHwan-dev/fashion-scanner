import React from 'react';
import cultureTop from 'videos/vod_culture_top.mp4';
import 'components/devTeamComponents/css/DevTeamTitle.css';

const DevTeamTitle = () => {
  return (
    <>
      <div className="devTeam__title">
        <img src={require('images/team_logo.png').default} alt="FASHION SCANNER TEAM" />
        <div className="title__video">
          <video autoPlay muted loop>
            <source src={cultureTop} type="video/mp4" />
          </video>
        </div>
      </div>
    </>
  );
};
export default DevTeamTitle;
