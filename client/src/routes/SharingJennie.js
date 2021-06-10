import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Navigation from 'components/commonComponents/Navigation';
import MemberCard from 'components/matchingComponents/MemberCard';
import InfoCard from 'components/matchingComponents/InfoCard';
import Footer from 'components/commonComponents/Footer';
import 'routes/css/Result.css';

const SharingJennie = () => {
  const isShared = true;
  const { t } = useTranslation('sharingJennie');
  const [isClicked, setIsClicked] = useState(false);
  const result = {
    matchingResultKo: {
      memberObj: {
        name: 'jennie',
        title: '당신은 인간명품 제니!',
        comment1: '캐쥬얼과 화려함 사이를 오고가는 변신의 귀재이시군요.',
        comment2: '제니의 룩북을 참고해보세요.',
        btnLabel: '제니 룩북 바로가기',
      },
    },
    matchingResultEn: {
      memberObj: {
        name: 'jennie',
        title: 'You got Jennie!',
        comment1: 'You pull off not only casual but also fancy outfits.',
        comment2: 'See the LOOKBOOK of Jennie.',
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
            {localStorage.i18nextLng === 'en' ? (
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
            ) : (
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
            )}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default SharingJennie;
