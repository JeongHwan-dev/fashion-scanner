import React from 'react';
import { useHistory } from 'react-router-dom';
import 'components/matchingComponents/css/MemberCard.css';

const MemberCard = ({ memberObj }) => {
  const history = useHistory();

  // 멤버 룩북 페이지 이동 핸들러
  const onMoveLookbook = ({ name }) => {
    history.push({
      pathname: `/lookbook/${name}`,
    });
  };

  return (
    <>
      <div className="container">
        <div className="card front">
          <div className="card__title">
            <img src={require('images/blackpink_logo2.png').default} alt="BLACKPINK" />
          </div>
          <div className="card__subtitle">
            <img src={require('images/card_subtitle1.png').default} alt="Which member are you?" />
          </div>
        </div>
        <div className="card back">
          <div className="card__bg">
            <img src={memberObj.photo} alt={memberObj.name} />
            <div className="bg__sign">
              <img src={memberObj.sign} alt={memberObj.name} />
            </div>
            <div className="card__dsc">
              <p>{memberObj.comment}</p>
            </div>
          </div>
          <div className="card__btn">
            <button
              onClick={() => {
                onMoveLookbook(memberObj.name);
              }}
            >
              {memberObj.btnLabel}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MemberCard;
