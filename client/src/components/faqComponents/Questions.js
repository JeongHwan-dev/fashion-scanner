import React, { useState } from 'react';
import 'components/faqComponents/css/Questions.css';

const Questions = () => {
  const [blackpink, setBlackpink] = useState(false);

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
              <p>Q. 사전 신청 시 후원금이 적립되는 것에 대해 자세히 알고 싶어요.</p>
              <p>
                후원금 적립 이벤트는 참가자분들께 컨퍼런스 참가 그 이상의 의미를 드리기 위해
                기획되었습니다. 참가자분들은 컨퍼런스 사전 신청을 통해 개발 커뮤니티의 성장과 생태계
                발전 기여에 함께할 수 있습니다. 참가 신청 후 1만 원의 후원금이 자동 예치되며,
                후원금은 토스에서 전액 지원합니다.
              </p>
            </div>
            <div className="questions__question">
              <p>Q. 후원하는 단체들의 선정 기준이 궁금해요.</p>
              <p>
                비영리로 운영되는 개발 관련 단체들 중 COVID-19로 대면 컨퍼런스 개최가 어려운 환경
                속에도 지속적으로 개발자들 간의 정보공유 및 교류에 기여하는 단체들을 선정하였습니다.
                해당 단체들은 개발자들의 인사이트 공유와 소중한 경험을 나눌 수 있도록 매년
                컨퍼런스를 개최하고 있습니다.
              </p>
            </div>
            <div className="questions__question">
              <p>Q. 후원금의 한도가 정해져 있나요?</p>
              <p>
                최종 후원금을 기준으로 각 단체들에게 동일한 비율로 후원금(각 최대 1,000만 원)이
                전달됩니다.
              </p>
            </div>
            <div className="questions__question">
              <p>Q. 후원금은 어떻게 활용되나요?</p>
              <p>
                후원금은 국내 개발자 생태계 발전을 위한 컨퍼런스 운영 비용으로 사용되며, 사용 목적과
                내역을 투명하게 공유 받아 후원금이 본래 취지에 맞게 활용되었는지 지속적으로 확인할
                예정입니다.
              </p>
            </div>
          </>
        ) : (
          <>
            <div className="questions__question">
              <p>Q. 세션 영상이 올라오는 시간과 확인 방법이 궁금해요.</p>
              <p>
                세션 영상은 4월 28일(수)부터 4월 30일(금)까지, 총 3일에 걸쳐 매일 오후 7시에 공개될
                예정입니다. 사전 신청을 하신 경우, 이메일 및 문자를 통해 세션 영상 확인이 가능한
                URL을 안내 받게 됩니다.
              </p>
            </div>
            <div className="questions__question">
              <p>Q. 세션 영상을 다시 볼 수 있나요?</p>
              <p>
                행사 기간 이후에도 세션 영상은 SLASH 홈페이지에 아카이브되어 언제든지 확인
                가능합니다.
              </p>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Questions;
