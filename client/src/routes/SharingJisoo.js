import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Navigation from 'components/commonComponents/Navigation';
import MemberCard from 'components/matchingComponents/MemberCard';
import InfoCard from 'components/matchingComponents/InfoCard';
import Footer from 'components/commonComponents/Footer';
import 'routes/css/Result.css';

const SharingJisoo = () => {
  const isShared = true;
  const { t } = useTranslation('sharingJisoo');
  const [isClicked, setIsClicked] = useState(false);
  const result = {
    matchingResultKo: {
      memberObj: {
        name: 'jisoo',
        title: '당신은 패완얼의 정석 지수!',
        comment1: '남다른 패션센스를 자랑하지만 가끔 얼굴때문에 그 센스가 묻히는군요.',
        comment2: '지수의 룩북을 참고해보세요.',
        btnLabel: '지수 룩북 바로가기',
      },
    },
    matchingResultEn: {
      memberObj: {
        name: 'jennie',
        title: 'You got Jisoo!',
        comment1: 'You have such great fashion sense.',
        comment2: 'See the LOOKBOOK of Jisoo.',
        btnLabel: 'LOOKBOOK',
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

export default SharingJisoo;
