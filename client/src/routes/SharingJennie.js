import React, { useState } from 'react';
import Navigation from 'components/commonComponents/Navigation';
import MemberCard from 'components/matchingComponents/MemberCard';
import InfoCard from 'components/matchingComponents/InfoCard';
import Footer from 'components/commonComponents/Footer';
import 'routes/css/Result.css';

const SharingJennie = () => {
  const isShared = true;
  const [isClicked, setIsClicked] = useState(false);
  const result = {
    memberObj: {
      name: 'jisoo',
      title: '당신은 인간명품 제니',
      comment1: '캐쥬얼과 화려함 사이를 오고가는 변신의 귀재이시군요.',
      comment2: '제니의 룩북을 참고해보세요!',
      btnLabel: '제니 룩북 바로가기',
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

export default SharingJennie;
