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
      position: 'Front-end 박정환',
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
        t1: '가보지 않은 길을',
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
        t1: '가보지 않은 길을',
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
      vod: culture3,
    },
    {
      id: 4,
      title: {
        t1: '가보지 않은 길을',
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
      vod: culture4,
    },
    {
      id: 5,
      title: {
        t1: '가보지 않은 길을',
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
