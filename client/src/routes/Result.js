import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navigation from 'components/commonComponents/Navigation';
import MemberCard from 'components/matchingComponents/MemberCard';
import InfoCard from 'components/matchingComponents/InfoCard';
import Footer from 'components/commonComponents/Footer';
import 'routes/css/Result.css';

const Result = () => {
  const url = `http://elice-kdt-ai-track-vm-ai-13.koreacentral.cloudapp.azure.com:8000`;
  const [isClicked, setIsClicked] = useState(false);
  const [result, setResult] = useState({
    memberObj: {
      name: '',
      photo: '',
      sign: '',
      comment: '',
      btnLabel: '',
    },
    imgObj: {
      type: '',
      feature: '',
    },
  });

  useEffect(() => {
    setResult({
      memberObj: {
        name: 'jisoo',
        photo: '/images/matching/jisoo_card.jpg',
        sign: '/images/matching/jisoo_sign.png',
        title: '당신은 패완얼의 정석 지수',
        comment1: '남다른 패션센스를 자랑하지만 가끔 얼굴때문에 그 센스가 묻히는군요.',
        comment2: '지수의 룩북을 참고해보세요!',
        btnLabel: '지수 룩북 바로가기',
      },
      imgObj: {
        type: '티셔츠',
        feature: '반팔, 하프넥, 스트라이프 패턴',
      },
    });
    // 추후 API 불러오기로 수정
    // getResult();
  }, []);

  // 매칭 결과값 불러오기 함수
  const getResult = async () => {
    await axios.get(url + '/matching/result').then((response) => {
      console.log(response);
    });
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
            <InfoCard memberObj={result.memberObj} imgObj={result.imgObj} isClicked={isClicked} />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Result;
