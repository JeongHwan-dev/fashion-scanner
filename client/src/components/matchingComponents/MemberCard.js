import React from 'react';
import 'components/matchingComponents/css/MemberCard.css';

const MemberCard = ({ memberObj, isClicked, onCardClickHandler }) => {
  return (
    <>
      <div className={`container ${isClicked ? 'clicked' : ''}`} onClick={onCardClickHandler}>
        <div className="card front">
          <div className="card__title">
            <img src="/images/matching/card_title.png" alt="BLACKPINK" />
          </div>
          <div className="card__subtitle">
            <img src="/images/matching/card_subtitle.png" alt="Which member are you?" />
          </div>
        </div>
        <div className="card back">
          <div className="card__photo">
            <img src={memberObj.photo} alt={memberObj.name} />
          </div>
          <div className="card__sign">
            <img src={memberObj.sign} alt={memberObj.name} />
          </div>
        </div>
      </div>
    </>
  );
};

export default MemberCard;
