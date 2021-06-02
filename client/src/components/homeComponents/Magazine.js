import React from 'react';
import magazine from 'videos/magazine.mp4';
import 'components/homeComponents/css/Magazine.css';

const Magazine = () => {
  return (
    <>
      <section className="magazine" id="section__magazine">
        <div className="magazine__inner">
          <div className="magazine__video">
            <video autoPlay muted>
              <source src={magazine} type="video/mp4" />
            </video>
          </div>
          <div className="magazine__dsc">
            <ul>
              <li>
                <img src={require('images/blackpink_logo.png').default} alt="BLACKPINK" />
              </li>
              <li>
                <p>
                  패션 트렌드를 따라가는 사람들이 좋아하는 아이돌 블랙핑크
                  <br />
                  한류 콘텐츠의 힘이 커지면서 블랙핑크의 행보가 패션업계에서도 '핫이슈'입니다.
                  <br />
                  빼어난 패션 감각과 고급스러운 이미지에 멤버 모두가 해외 명품 브랜드의 엠버서더로
                  활약하고 있습니다.
                  <br />
                  "Never wear the same outfits"
                  <br />
                  블랙핑크는 무대의상뿐만 아니라 사복패션에서도 다양한 스타일을 제시합니다.
                  <br />
                  그녀들이 입은 옷은 '새로운 패션 트렌드의 시작'으로 평가됩니다.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Magazine;