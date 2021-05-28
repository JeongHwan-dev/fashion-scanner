import React from 'react';
import 'components/lookbookComponents/css/MemberInfo.css';

const MemberInfo = () => {
  return (
    <>
      <section className="memberinfo">
        <div className="memberinfo__inner">
          <div className="memberinfo__img">
            <img src={require('images/lookbook_jisoo_main.png').default} alt="blackpink member" />
          </div>
          <div className="memberinfo__dsc">
            <h2>JISOO</h2>
            <p>
              블랙핑크의 비주얼 담당, 우아하고 여성스러운 이미지의 '인간 디올' 지수. <br />
              키에 비해 다리가 길고, 골반이 넓은 체형으로 여성스러우면서도 힙한 스타일의 의상을 즐깁니다. 
              여자 아이돌 중 유일하게 영향력 있는 패션인을 나타내는 '2019년 BoF 500' 의 멤버로 선정되기도
              했으며, 현재는 디올 뷰티 로컬 앰배서더로 활동하고 있습니다. <br /> 블랙핑크의 사랑스러운 막내
              지수의 룩을 확인해보세요.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default MemberInfo;
