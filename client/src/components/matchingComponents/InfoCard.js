import React from 'react';
import { useHistory } from 'react-router-dom';
import 'components/matchingComponents/css/InfoCard.css';

const InfoCard = ({ memberObj, imgObj, isClicked }) => {
  const history = useHistory();

  // 멤버 룩북 페이지 이동 핸들러
  const onMoveLookbook = () => {
    history.push({
      pathname: `/lookbook/${memberObj.name}`,
    });
  };

  return (
    <>
      <div className={`infoCard ${isClicked ? 'clicked' : ''}`}>
        <div className="infoCard__dsc">
          <p>
            당신은 패완얼의 정석 지수 남다른 패션센스를 자랑하지만 가끔 얼굴때문에 그 센스가
            묻히는군요. 지수의 룩북을 참고해보세요!
          </p>
        </div>
        <div className="infoCard__imgObj">
          <table>
            <th colspan="2">업로드한 이미지 정보</th>
            <tr>
              <td>Type</td>
              <td>티셔츠</td>
            </tr>
            <tr>
              <td>Feature</td>
              <td>반팔, 하프넥, 스트라이프 패턴</td>
            </tr>
          </table>
        </div>
        <div className="infoCard__btn">
          <a href={`/lookbook/${memberObj.name}`}>룩북 바로가기</a>
        </div>
      </div>
    </>
  );
};

export default InfoCard;
