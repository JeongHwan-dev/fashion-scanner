import React from 'react';
import 'components/devTeamComponents/css/DevTeamSub.css';

const DevTeamSub = () => {
  return (
    <>
      <div className="devTeam__sub">
        <div className="sub__logo">
          <img src="/images/devTeam/dev_team_logo1.png" alt="FASHION SCANNER TEAM" />
          <img src="/images/devTeam/dev_team_logo2.png" alt="FASHION SCANNER TEAM" />
        </div>
        <dev className="sub__dsc">
          <h2>패션 스캐너스럽나요?</h2>
          <p>
            재밌을까요? 그럼 하시죠!
            <br />
            패션 스캐너 크루는 재미에서 생산성과 효율성을 잡습니다. <br />
            일하는 사람이 즐거워야 좋은 결과물이 나올 수 있으니까요.
            <br />
            세상이 놀랄만한 원대한 목표나 계획보다는 하루하루 소소하게 웃을 수 있는 사소한 재미를
            고민합니다.
            <br />
            앞으로도 그 사소한 재미로 고민하고 시작하고, 답을 찾을 것 입니다.
          </p>
        </dev>
      </div>
    </>
  );
};

export default DevTeamSub;
