import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Navigation from 'components/commonComponents/Navigation';
import MemberCard from 'components/matchingComponents/MemberCard';
import InfoCard from 'components/matchingComponents/InfoCard';
import Footer from 'components/commonComponents/Footer';
import 'routes/css/Result.css';

const SharingRose = () => {
  const isShared = true;
  const { t } = useTranslation('sharingRose');
  const [isClicked, setIsClicked] = useState(false);
  const result = {
    matchingResultKo: {
      memberObj: {
        name: 'rose',
        title: '당신은 분위기 여신 로제!',
        comment1: '편안한 룩을 즐기지만 항상 컬러로 포인트를 주는 꾸안꾸의 정석이시군요.',
        comment2: '로제의 룩북을 참고해보세요!',
        btnLabel: '로제 룩북 바로가기',
      },
    },
    matchingResultEn: {
      memberObj: {
        name: 'rose',
        title: 'You got Rose!',
        comment1: 'You dress effortlessly chic.',
        comment2: 'See the LOOKBOOK of Rose.',
        btnLabel: 'Rose LOOKBOOK',
      },
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
                <p>{t('guide')}</p>
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
            {localStorage.i18nextLng === 'ko' ? (
              <>
                <MemberCard
                  memberObj={result.matchingResultKo.memberObj}
                  isClicked={isClicked}
                  onCardClickHandler={onCardClickHandler}
                />
                <InfoCard
                  memberObj={result.matchingResultKo.memberObj}
                  isShared={isShared}
                  isClicked={isClicked}
                />
              </>
            ) : (
              <>
                <MemberCard
                  memberObj={result.matchingResultEn.memberObj}
                  isClicked={isClicked}
                  onCardClickHandler={onCardClickHandler}
                />
                <InfoCard
                  memberObj={result.matchingResultEn.memberObj}
                  isShared={isShared}
                  isClicked={isClicked}
                />
              </>
            )}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default SharingRose;
