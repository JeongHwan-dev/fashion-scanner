import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import 'components/devTeamComponents/css/CultureCard.css';

const CultureCard = ({ memberObj }) => {
  const isMobile = useMediaQuery({ maxWidth: 414 });
  const [isClicked, setIsClicked] = useState(false);

  // 클릭 여부 확인 핸들러
  const onCardClickHandler = () => {
    setIsClicked(!isClicked);
  };

  return (
    <>
      {!isMobile ? (
        <>
          <div className="culture__card">
            <div className="card__cont">
              <h2>
                {memberObj.title.t1}
                <br />
                {memberObj.title.t2}
              </h2>
              <span>{memberObj.position}</span>
              <div className="cont__dsc">
                <p>{memberObj.content}</p>
                <span>{memberObj.hashtag.h1}</span>
                <span>{memberObj.hashtag.h2}</span>
              </div>
            </div>
            <div className="card__vod">
              <video autoPlay muted loop>
                <source src={memberObj.vod} type="video/mp4" />
              </video>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className={`culture__card ${isClicked ? 'clicked' : ''}`}>
            <div className="devCard front">
              <video muted autoPlay loop placeinline="true">
                <source src={memberObj.vod} type="video/mp4" />
              </video>
              <p className="front__title">
                {memberObj.title.t1}
                <br />
                {memberObj.title.t2}
              </p>
              <p className="front__position">{memberObj.position}</p>
              <button onClick={onCardClickHandler}>
                <label className="material-icons">add_circle</label>
              </button>
            </div>
            <div className="devCard back">
              <h2>
                {memberObj.title.t1}
                <br />
                {memberObj.title.t2}
              </h2>
              <span>{memberObj.position}</span>
              <div className="cont__dsc">
                <p>{memberObj.content}</p>
                <span>{memberObj.hashtag.h1}</span>
                <span>{memberObj.hashtag.h2}</span>
              </div>
              <button onClick={onCardClickHandler}>
                <label className="material-icons">add_circle</label>
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default CultureCard;
