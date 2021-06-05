import React from 'react';
import 'components/matchingComponents/css/InfoCard.css';

const InfoCard = ({ memberObj, imgObj, isClicked }) => {
  return (
    <>
      <div className={`infoCard ${isClicked ? 'clicked' : ''}`}>
        <div className="infoCard__dsc">
          <p>
            {memberObj.title}
            <br />
            {memberObj.comment1}
            <br />
            {memberObj.comment2}
          </p>
        </div>
        <div className="infoCard__imgObj">
          <table>
            <th colspan="2">업로드한 이미지 정보</th>
            <tr>
              <td>Type</td>
              <td>{imgObj.type}</td>
            </tr>
            <tr>
              <td>Feature</td>
              <td>{imgObj.feature}</td>
            </tr>
          </table>
        </div>
        <div className="infoCard__btn">
          <a href={`/lookbook/${memberObj.name}`}>{memberObj.btnLabel}</a>
        </div>
      </div>
    </>
  );
};

export default InfoCard;
