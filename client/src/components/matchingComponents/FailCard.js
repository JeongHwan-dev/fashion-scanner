import React from 'react';
import { useHistory } from 'react-router-dom';
import 'components/matchingComponents/css/FailCard.css';

const FailCard = () => {
  const history = useHistory();

  // 매칭 페이지 이동 핸들러
  const onMoveMatching = () => {
    history.push({
      pathname: '/matching',
    });
  };
  return (
    <>
      <div className="failCard">
        <div className="failCard__bg">
          <img src="/images/failure_group_photo.jpg" alt="Failure" />
          <div className="failCard__dsc">
            <p>매칭에 실패하였습니다.</p>
            <p>다시 한번 시도해 주세요</p>
            <p>매칭이 계속 실패하신다면 다른 사진을 활용해 주세요.</p>
          </div>
        </div>
        <div className="failCard__btn">
          <button onClick={onMoveMatching}>
            <label className="material-icons">
              reply <span>이전으로 돌아가기</span>
            </label>
          </button>
        </div>
      </div>
    </>
  );
};

export default FailCard;
