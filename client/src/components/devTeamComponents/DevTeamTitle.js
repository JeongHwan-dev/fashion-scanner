import React from 'react';
import cultureTop from 'videos/vod_culture_top.mp4';
import 'components/devTeamComponents/css/DevTeamTitle.css';

const DevTeamTitle = () => {
  return (
    <>
      <div className="devTeam__title">
        <img src="/images/devTeam/dev_team_logo.png" alt="FASHION SCANNER TEAM" />
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
