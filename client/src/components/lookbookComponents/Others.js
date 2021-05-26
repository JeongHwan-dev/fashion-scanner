import React from 'react';
import { Link } from 'react-router-dom';
import 'components/lookbookComponents/css/Others.css';

const Others = () => {
  // 지정한 필터 없애기
  function removeFilter(e) {
    e.target.style.filter = 'none';
  }

  // 다른멤버 확인하기 섹션의 멤버들 이미지 흑백으로 설정하기
  function changeMemberToGrayscale(e) {
    e.target.style.filter = 'grayscale(1)';
  }

  return (
    <>
      <section className="others">
        <div className="others__inner">
          <div className="others__dsc">
            <h2>
              다른 멤버 <br /> 확인하기
            </h2>
          </div>
          <div className="others__img">
            <Link to="/" onMouseOver={removeFilter} onMouseLeave={changeMemberToGrayscale}>
              <img src={require('images/lookbook_members_jennie.png').default} alt="jennie" />
            </Link>
            <Link to="/" onMouseOver={removeFilter} onMouseLeave={changeMemberToGrayscale}>
              <img src={require('images/lookbook_members_jisoo.png').default} alt="jennie" />
            </Link>
            <Link to="/" onMouseOver={removeFilter} onMouseLeave={changeMemberToGrayscale}>
              <img src={require('images/lookbook_members_lisa.png').default} alt="jennie" />
            </Link>
            <Link to="/" onMouseOver={removeFilter} onMouseLeave={changeMemberToGrayscale}>
              <img src={require('images/lookbook_members_rose.png').default} alt="jennie" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Others;
