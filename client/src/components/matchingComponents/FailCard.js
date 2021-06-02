import React from 'react';
import 'components/matchingComponents/css/FailCard.css';

const FailCard = () => {
  return (
    <>
      <div className="failCard__inner">
        <div className="failCard__img">
          <img src="/images/failure_group_photo.jpg" alt="Failure" />
        </div>
        <div className="failCard__text">
          <p>잠시 후 다시 시도해주세요.</p>
          <p>같은 문제가 계속 되신다면 다른 이미지를 활용해주세요.</p>
        </div>
        <div className="failCard__btn">
          <a href="/matching">
            <label>이전으로 돌아가기</label>
          </a>
        </div>
      </div>
    </>
  );
};

export default FailCard;
