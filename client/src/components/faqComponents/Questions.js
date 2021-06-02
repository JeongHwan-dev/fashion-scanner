import React from 'react';
import 'components/faqComponents/css/Questions.css';

const Questions = ({ blackpink, setBlackpink }) => {
  return (
    <section className="questions" id="section__questions">
      <div className="questions__inner">
        <h2>자주 묻는 질문</h2>
        <div className="questions__tab">
          <div
            className={`questions__tab__content ${!blackpink ? 'active' : ''}`}
            onClick={() => setBlackpink(false)}
          >
            <h3>FASHION SCANNER</h3>
          </div>
          <div
            className={`questions__tab__content ${blackpink ? 'active' : ''}`}
            onClick={() => setBlackpink(true)}
          >
            <h3>BLACKPINK</h3>
          </div>
        </div>
        {!blackpink ? (
          <>
            <div className="questions__question">
              <p>Q. 패션 스캐너는 어떤 서비스 인가요?</p>
              <p>
                패션업계에서 유명한 케이팝 스타를 선정한 후 AI 이미지처리 기능을 활용해 '착용한
                의류에 관한 정보'와 '비슷한 의류의 판매처'를 찾아주는 서비스입니다.
              </p>
            </div>
            <div className="questions__question">
              <p>Q. 케이팝스타 선정 기준은 무엇인가요?</p>
              <p>
                패션스캐너는 공정한 과정을 거쳐 케이팝 스타를 선정합니다. 선정 기준의 경우 외부
                공개가 어려운 점 양해 부탁드립니다.
              </p>
            </div>
            <div className="questions__question">
              <p>Q. 사진을 보냈는데 이메일 알림을 못받았습니다.</p>
              <p>
                보내주신 사진을 검토한 후 룩북에 추가되는 것이 확정된 경우에만 일주일 이내에
                이메일을 송부드리고 있습니다.
              </p>
            </div>
            <div className="questions__question">
              <p>Q. 판매 링크로 들어갔는데 품절이라고 뜹니다.</p>
              <p>
                패션스캐너는 판매링크를 연결해 드릴뿐 물품의 재고, 배송, 품질 관련해서는 각 판매처에
                문의 부탁드립니다.
              </p>
            </div>
            <div className="questions__question">
              <p>Q. 패션스캐너의 다음 케이팝 스타를 추천하고 싶습니다.</p>
              <p>
                추천하고 싶으신 케이팝 스타의 이름과 그 이유를 포함하여 support@fashionscanner.com
                으로 문의부탁드립니다.
              </p>
            </div>
          </>
        ) : (
          <>
            <div className="questions__question">
              <p>Q. 각 멤버별 사진은 어떤식으로 선정하나요?</p>
              <p>
                블랙핑크 멤버들이 입고 찍힌 모든 사진이 후보입니다. 그중에서 AI 이미지 처리 기능을
                통해 적합한 사진을 선별하고 있습니다.
              </p>
            </div>
            <div className="questions__question">
              <p>Q. 룩북에 추가하고 싶은 사진이 있습니다.</p>
              <p>
                메인페이지 하단 '패션스캐너를 즐기는 또 다른 방법' 을 통해 사진을 보내주시면 내부
                검토를 거쳐 이메일 알림을 드립니다.
              </p>
            </div>
            <div className="questions__question">
              <p>Q. '나와 닮은 멤버' 이미지 첨부에서 오류가 납니다. </p>
              <p>파일형식은 jpg, jpeg, png만 지원하고 있습니다.</p>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Questions;
