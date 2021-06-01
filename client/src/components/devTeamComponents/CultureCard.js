import React from 'react';
import 'components/devTeamComponents/css/CultureCard.css';

const CultureCard = ({ memberObj }) => {
  return (
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
  );
};

export default CultureCard;
