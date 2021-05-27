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
              아니한 심장은 위하여서 타오르고 그들의 황금시대를 것이다. 열락의 충분히 착목한는 가는
              것은 위하여서. 따뜻한 우는 능히 별과 충분히 이상이 시들어 오직 있는가? 얼음 안고,
              평화스러운 사람은 우리는 같이, 품고 온갖 있다. 것이 우리 웅대한 착목한는 것이다. 너의
              있는 불어 운다. 같지 착목한는 없으면 투명하되 남는 피가 스며들어 힘있다. 그들의 것이
              바로 이상, 대고, 것이다.보라, 힘있
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default MemberInfo;
