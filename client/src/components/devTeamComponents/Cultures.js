import React from 'react';
import CultureCard from 'components/devTeamComponents/CultureCard';
import culture1 from 'videos/vod_culture1.mp4';
import culture2 from 'videos/vod_culture2.mp4';
import culture3 from 'videos/vod_culture3.mp4';
import culture4 from 'videos/vod_culture4.mp4';
import culture5 from 'videos/vod_culture5.mp4';

const Cultures = () => {
  const members = [
    {
      id: 1,
      title: {
        t1: '가보지 않은 길을',
        t2: '두려워 하지 않습니다.',
      },
      position: '기획 & AI 차시현',
      content: `"가보지 않은 길은 위험하잖아?" 배는 정박해 있을 때 가장 안전하지만 그것은 배의 존재
      이유가 아닙니다. 가보지 않은 길은 실패의 위험이 따르지만 우리는 개선보다 혁신의 길을
      가는 사람들입니다. 문제 자체를 다시 정의하고 새로운 해답을 찾는 것에 집중합니다.
      도전이 두렵기만 하다면 카카오를 떠날 때입니다.`,
      hashtag: {
        h1: '#개선아닌혁신',
        h2: '#개선아닌혁신',
      },
      vod: culture1,
    },
    {
      id: 2,
      title: {
        t1: '클린코드를 위한 리팩토링',
        t2: '두려워 하지 않습니다.',
      },
      position: 'Front-end 박정환',
      content: `"가보지 않은 길은 위험하잖아?" 배는 정박해 있을 때 가장 안전하지만 그것은 배의 존재
      이유가 아닙니다. 가보지 않은 길은 실패의 위험이 따르지만 우리는 개선보다 혁신의 길을
      가는 사람들입니다. 문제 자체를 다시 정의하고 새로운 해답을 찾는 것에 집중합니다.
      도전이 두렵기만 하다면 카카오를 떠날 때입니다.`,
      hashtag: {
        h1: '#개선아닌혁신',
        h2: '#개선아닌혁신',
      },
      vod: culture2,
    },
    {
      id: 3,
      title: {
        t1: '소통과 협업으로',
        t2: '더 나은 성과를 만듭니다.',
      },
      position: 'Front-end 김수연',
      content: `완벽한 한 개인이 조직의 모든 일을 책임진다는 건 
      협업하는 팀만이 창출할 수 있는 가치를 포기한다는 것을 의미합니다. 
      팀 '마지막처럼'은 개개인이 각자 전문성을 가진 분야에서 팀 공동의 목표를 인지하며 함께 일합니다. 
      타인의 의견을 귀 기울여 듣고 긍정적으로 피드백하며 더 나은 성과를 만들어 갑니다.`,
      hashtag: {
        h1: '#최고의복지는동료',
        h2: '#신뢰충돌헌신',
      },
      vod: culture3,
    },
    {
      id: 4,
      title: {
        t1: '클린코드를 위한',
        t2: '리팩토링',
      },
      position: 'Front-end 박정환',
      content: `"이게 무슨 코드야? 어떤 로직으로 돌아가는거야?" 라고 동료들이 자신에게 묻는 일이 많아진다면 그것은 잘못된 방법으로 개발을 하고 있는건지도 모릅니다.배는 정박해 있을 때 가장 안전하지만 그것은 배의 존재`,
      hashtag: {
        h1: '#개선아닌혁신',
        h2: '#개선아닌혁신',
      },
      vod: culture2,
    },
    {
      id: 5,
      title: {
        t1: '더 나은 세상을',
        t2: '만들어갑니다.',
      },
      position: 'AI 이찬미',
      content: `기술을 통해 더 나은 세상을 만드는 데 기여하는 일을 꿈꿉니다. 개인의 생활에 도움을 주는 서비스를 만듭니다. 서비스가 개인과 사회에 미치는 영향력을 고려하고, 긍정적인 영향을 주기 위해 노력합니다`,
      hashtag: {
        h1: '#BetterLife',
        h2: '#BetterWorld',
      },
      vod: culture5,
    },
  ];

  // 개발 문화 카드 랜더링 메서드
  const rendering = () => {
    const result = [];
    for (let i = 0; i < members.length; i++) {
      result.push(<CultureCard key={i} memberObj={members[i]} />);
    }
    return result;
  };

  return (
    <>
      <div className="devTeam__culture">{rendering()}</div>
    </>
  );
};

export default Cultures;
