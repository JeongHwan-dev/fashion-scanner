import React from 'react';
import { useHistory } from 'react-router-dom';
import 'components/homeComponents/css/Matching.css';

const Matching = () => {
  const history = useHistory();
  // Matching 페이지 이동 핸들러
  const onMoveMember = () => {
    history.push('/member');
  };

  return (
    <>
      <section className="matching">
        <div className="matching__inner">
          <div className="matching__contents">
            <div className="contents__title">
              <img src={require('images/matching_logo1.png').default} alt="WHICH MEMBER" />
              <img src={require('images/matching_logo2.png').default} alt="ARE YOU?" />
            </div>
            <div className="contents__dsc">
              <p>
                본인의 평소 입는 스타일의 옷을 업로드해보세요.
                <br />
                AI가 어떤 멤버와 패션 성향이 가장 비슷한지 알려드립니다.
              </p>
            </div>
            <div className="contents__btn">
              <button onClick={onMoveMember}>바로가기</button>
            </div>
          </div>
          <div className="matching__img">
            <img src={require('images/group_photo.png').default} alt="GROUP Photo" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Matching;