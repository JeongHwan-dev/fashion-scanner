import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Navigation from 'components/commonComponents/Navigation';
import MemberCard from 'components/matchingComponents/MemberCard';
import InfoCard from 'components/matchingComponents/InfoCard';
import Footer from 'components/commonComponents/Footer';
import 'routes/css/Result.css';

const SharingLisa = () => {
  const isShared = true;
  const { t } = useTranslation('sharingLisa');
  const [isClicked, setIsClicked] = useState(false);
  const result = {
    matchingResultKo: {
      memberObj: {
        name: 'lisa',
        title: '당신은 비율 천재 리사!',
        comment1: '남다른 각선미로 어떤 옷이던 자기 옷처럼 만드는 남다른 소화력을 지니셨군요.',
        comment2: '리사의 룩북을 참고해보세요!',
        btnLabel: '리사 룩북 바로가기',
      },
    },
    matchingResultEn: {
      memberObj: {
        name: 'lisa',
        title: 'You got Lisa!',
        comment1: 'Every outfit looks good on you.',
        comment2: 'See the LOOKBOOK of Lisa.',
        btnLabel: 'Lisa LOOKBOOK',
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

export default SharingLisa;
