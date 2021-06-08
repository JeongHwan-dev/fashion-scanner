import React from 'react';
import { useTranslation } from 'react-i18next';
import 'components/devTeamComponents/css/DevTeamSub.css';

const DevTeamSub = () => {
  const { t } = useTranslation('devTeamSub');

  return (
    <>
      <div className="devTeam__sub">
        <div className="sub__logo">
          <img src="/images/devTeam/dev_team_logo1.png" alt="FASHION SCANNER TEAM" />
          <img src="/images/devTeam/dev_team_logo2.png" alt="FASHION SCANNER TEAM" />
        </div>
        <dev className="sub__dsc">
          <h2>{t('sub_dsc1')}</h2>
          <p>
            {t('sub_dsc2')}
            <br />
            {t('sub_dsc3')} <br />
            {t('sub_dsc4')}
            {t('sub_dsc5')}
            <br /> {t('sub_dsc6')}
          </p>
        </dev>
      </div>
    </>
  );
};

export default DevTeamSub;
