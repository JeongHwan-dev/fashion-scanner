import React, { useState } from 'react';
import Navigation from 'components/commonComponents/Navigation';
import MemberCard from 'components/matchingComponents/MemberCard';
import InfoCard from 'components/matchingComponents/InfoCard';
import Footer from 'components/commonComponents/Footer';
import 'routes/css/Result.css';

const SharingRose = () => {
  const isShared = true;
  const [isClicked, setIsClicked] = useState(false);
  const result = {
    memberObj: {
      name: 'jisoo',
      title: '당신은 분위기 여신 로제',
      comment1: '편안한 룩을 즐기지만 항상 컬러로 포인트를 주는 꾸안꾸의 정석이시군요.',
      comment2: '로제의 룩북을 참고해보세요!',
      btnLabel: '로제 룩북 바로가기',
    },
    imgObj: {
      type: '',
      feature: '',
    },
  };

  // 클릭 여부 확인 핸들러
  const onCardClickHandler = () => {
    setIsClicked(!isClicked);
  };

  return (
    <>
      <div className="result">
        <Navigation />
        <div className="result__inner">
          <div className={`guide ${isClicked ? 'clicked' : ''}`}>
            {!isClicked ? (
              <>
                <p>아래의 카드에 마우스를 올려주세요.</p>
                <span className="material-icons">arrow_drop_down</span>
              </>
            ) : (
              <>
                <img
                  className={`result__title`}
                  src="/images/matching/matching_result_logo.png"
                  alt="Which member are you?"
                />
              </>
            )}
          </div>
          <div className="cards">
            <MemberCard
              memberObj={result.memberObj}
              isClicked={isClicked}
              onCardClickHandler={onCardClickHandler}
            />
            <InfoCard
              memberObj={result.memberObj}
              imgObj={result.imgObj}
              isShared={isShared}
              isClicked={isClicked}
            />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default SharingRose;
