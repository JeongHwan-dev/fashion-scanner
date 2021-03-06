import React from 'react';
import { useTranslation } from 'react-i18next';
import CultureCard from 'components/devTeamComponents/CultureCard';
import culture1 from 'videos/vod_culture1.mp4';
import culture2 from 'videos/vod_culture2.mp4';
import culture3 from 'videos/vod_culture3.mp4';
import culture4 from 'videos/vod_culture4.mp4';
import culture5 from 'videos/vod_culture5.mp4';
import 'components/devTeamComponents/css/Cultures.css';

const Cultures = () => {
  const { t } = useTranslation('');
  const membersKo = [
    {
      id: 1,
      title: {
        t1: '트렌디한 사람들이 모여',
        t2: '트렌드를 이끌어갑니다.',
      },
      position: 'PM & AI 차시현',
      content: `패션 스캐너 크루는 트렌드를 읽고 트렌디한 서비스를 제작합니다. 트렌드를 맹목적으로 쫓는 것이 아닌,  사용자가 선호하는 "변하는 가치"로 생각합니다. 사용자가 만족할 수 있는 서비스를 끊임없이 고민하여, 트렌드를 알고 싶은 사람이 꼭 방문하는 웹서비스를 최종 목표로 합니다.`,
      hashtag: {
        h1: '#Reading Trend',
        h2: '#Leading Trend',
      },
      vod: culture1,
    },
    {
      id: 2,
      title: {
        t1: '더 나은 세상을',
        t2: '만들어갑니다.',
      },
      position: 'AI 이찬미',
      content: `기술을 통해 더 나은 세상을 만드는 데 기여하는 일을 꿈꿉니다. 개인의 생활에 도움을 
      주는 서비스를 만듭니다. 서비스가 개인과 사회에 미치는 영향력을 고려하고, 
      긍정적인 영향을 주기 위해 노력합니다.`,
      hashtag: {
        h1: '#BetterLife',
        h2: '#BetterWorld',
      },
      vod: culture5,
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
      '패션 스캐너'는 개개인이 각자 전문성을 가진 분야에서 팀 공동의 목표를 인지하며 함께 일합니다. 
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
        t1: '리팩토링을 통한',
        t2: '클린 코드를 달성합니다.',
      },
      position: 'Front-end 박정환',
      content: `"이게 무슨 코드야? 어떤 로직으로 돌아가는 거야?" 라고 동료 개발자들이 자신에게 
      묻는 일이 많아진다면 그것은 잘못된 방법으로 개발을 하고 있는 건지도 모릅니다.
      좋은 코드란 타인이 보았을 때도 책을 읽듯 술술 읽히는 코드가 좋은 코드라고 생각하며 
      이를 위해 리팩토링을 통한 코드 개선에 노력합니다. `,
      hashtag: {
        h1: '#협업의 필살기',
        h2: '#클린 코드',
      },
      vod: culture2,
    },
    {
      id: 5,
      title: {
        t1: '가치 있는 일을 고민하고',
        t2: '끊임없이 탐구합니다.',
      },
      position: 'Back-end 이보람',
      content: `서비스의 가치가 시작되는 지점을 고민합니다. 가치는 새로운 기회를 만들기 때문입니다. 
      가치를 발견하기 위해 지속적으로 기술을 탐구합니다. 발견했다면 세상에 가치를 드러낼 방법을 연구합니다. 
      학습하고 탐구하는 과정에서 얻는 모든 경험은 저희에게 모두 소중한 자산입니다.`,
      hashtag: {
        h1: '#가치 First In',
        h2: '#가치 First out',
      },
      vod: culture4,
    },
  ];

  const membersEn = [
    {
      id: 1,
      title: {
        t1: 'Trendy people gathred',
        t2: 'to lead the Trend.',
      },
      position: 'PM & AI Sihyun Cha',
      content: `Fashion Scanner crew reads trend and creates trendy services. Instead of blindly chasing the trend, we think of it as a 'changing value' that users prefer. We will consistantly think about services that users can satisfy, and our ultimate goal is to provide a web service that people who want to know the trend always visit.`,
      hashtag: {
        h1: '#Reading Trend',
        h2: '#Leading Trend',
      },
      vod: culture1,
    },
    {
      id: 2,
      title: {
        t1: 'Make the World',
        t2: 'a Better Place.',
      },
      position: 'AI  Chan Mi Lee',
      content: `We are passionate about making the world a better place with our technologies. We provide helpful services for users' daily lives. We always consider the effect of our services on people and society and strive to make a positive impact. `,
      hashtag: {
        h1: '#BetterLife',
        h2: '#BetterWorld',
      },
      vod: culture5,
    },
    {
      id: 3,
      title: {
        t1: 'We make better performance',
        t2: 'with communication and teamwork.',
      },
      position: 'Front-end Suyeon Kim',
      content: `No one can make value that a team can create when a perfect individual is responsible for everything. We work together, knowing what our team goal is in areas we expertise. We hear each other's opinions, give some feedbacks positively and make better performance.`,
      hashtag: {
        h1: '#the_best_welfare_is_colleagues',
        h2: '#trust_to_trust',
      },
      vod: culture3,
    },
    {
      id: 4,
      title: {
        t1: 'Through the Code refactoring',
        t2: 'Achieve clean code.',
      },
      position: 'Front-end Jeong Hwan Park',
      content: `"What code is this? which logic are you trying to implement?" If fellow developers often asks this question, the code may be in the wrong way. We think that good code is code that can be read smoothly as if reading a book no matter who the reader is. To this end, we try to improve the code through refactoring.`,
      hashtag: {
        h1: '#Collaboration Skills',
        h2: '#Clean Code',
      },
      vod: culture2,
    },
    {
      id: 5,
      title: {
        t1: 'Contemplate valuable things and constantly',
        t2: 'explore.',
      },
      position: 'Back-end Borahm Lee',
      content: `We think about the point where the value of service begins. Because value creates new opportunities. Continuously explore technology to discover value. If found, we study how to reveal value to the world. Every experience we get from learning and exploring is a valuable asset to us.`,
      hashtag: {
        h1: '#Value First In',
        h2: '#Value First out',
      },
      vod: culture4,
    },
  ];

  // 개발 문화 카드 랜더링 메서드
  const rendering = (members) => {
    const result = [];
    for (let i = 0; i < members.length; i++) {
      result.push(<CultureCard key={i} memberObj={members[i]} />);
    }
    return result;
  };

  return (
    <>
      <div className="devTeam__cultures">
        {localStorage.i18nextLng === 'en' ? rendering(membersEn) : rendering(membersKo)}
      </div>
    </>
  );
};

export default Cultures;
