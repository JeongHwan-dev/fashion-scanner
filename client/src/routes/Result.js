import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Navigation from 'components/commonComponents/Navigation';
import MemberCard from 'components/matchingComponents/MemberCard';
import InfoCard from 'components/matchingComponents/InfoCard';
import Footer from 'components/commonComponents/Footer';
import 'routes/css/Result.css';

const Result = () => {
  const isShared = false;
  const location = useLocation();
  const { t } = useTranslation('result');
  const [isClicked, setIsClicked] = useState(false);
  const result = {
    matchingResultKo: location.state.matchingResultKo,
    matchingResultEn: location.state.matchingResultEn,
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
                  imgObj={result.matchingResultKo.imgObj}
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
                  imgObj={result.matchingResultEn.imgObj}
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

export default Result;
