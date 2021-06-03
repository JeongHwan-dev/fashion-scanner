import React from 'react';
import 'components/lookbookComponents/css/MemberInfo.css';

const MemberInfo = ({ memberId }) => {
  // jennie:1, rose:2, jisoo:3, lisa:4
  return (
    <>
      <section className="memberinfo">
        <div className="memberinfo__inner">
          <div className="memberinfo__img">
            {memberId === 1 ? (
              <img src="/images/lookbook/lookbook_jennie_main.png" alt="JENNIE" />
            ) : (
              <></>
            )}
            {memberId === 2 ? (
              <img src="/images/lookbook/lookbook_rose_main.png" alt="ROSE" />
            ) : (
              <></>
            )}
            {memberId === 3 ? (
              <img src="/images/lookbook/lookbook_jisoo_main.png" alt="JISOO" />
            ) : (
              <></>
            )}
            {memberId === 4 ? (
              <img src="/images/lookbook/lookbook_lisa_main.png" alt="LISA" />
            ) : (
              <></>
            )}
          </div>
          <div className="memberinfo__dsc">
            {memberId === 1 ? (
              <>
                <h2>JENNIE</h2>
                <p>
                  귀여우면서도 고급스러운 이미지의 '인간 샤넬' 제니. <br />
                  어깨가 예쁘기로 유명하며, 흉통이 좁아 허리라인이 돋보이는 옷을 즐깁니다. 2019년
                  패션 사진가의 밤 행사에서 '올해의 포토제닉상'을 수상하기도 했으며, 현재는 샤넬
                  코리아 뷰티 뮤즈로 활동하고 있습니다. 블랙핑크의 매력 화수분 제니의 룩을
                  확인해보세요.
                </p>
              </>
            ) : (
              <></>
            )}
            {memberId === 2 ? (
              <>
                <h2>ROSE</h2>
                <p>
                  독보적인 분위기의 소유자, '생로랑의 뷰티 뮤즈' 로제. <br />
                  뼈대가 얇고 마른 체형으로 여리여리해 보이지만 근육이 잘 잡혀 있어 심플한 옷들도
                  감각적으로 소화해 냅니다. 한국 셀러브리티 최초로 전세계 생로랑 매장 외벽을
                  장식하기도 하며 업계에서 꾸준한 영향력을 행사하고 있고, 현재는 생로랑뿐만 아니라
                  티파니앤코 글로벌 앰버서더로도 활동하고 있습니다. <br />
                  블랙핑크의 비단결 목소리 로제의 룩을 확인해보세요.
                </p>
              </>
            ) : (
              <></>
            )}
            {memberId === 3 ? (
              <>
                <h2>JISOO</h2>
                <p>
                  블랙핑크의 비주얼 담당, 우아하고 여성스러운 이미지의 '인간 디올' 지수. <br />
                  키에 비해 다리가 길고, 골반이 넓은 체형으로 여성스러우면서도 힙한 스타일의 의상을
                  즐깁니다. 여자 아이돌 중 유일하게 영향력 있는 패션인을 나타내는 '2019년 BoF 500'
                  의 멤버로 선정되기도 했으며, 현재는 디올 뷰티 로컬 앰배서더로 활동하고 있습니다.{' '}
                  <br /> 블랙핑크의 사랑스러운 막내 지수의 룩을 확인해보세요.
                </p>
              </>
            ) : (
              <></>
            )}
            {memberId === 4 ? (
              <>
                <h2>LISA</h2>
                <p>
                  화려한 이목구비, 걸어다니는 인형, '셀린느의 뮤즈' 리사. <br />
                  체형이 가늘고 모델에 가까운 월등한 신체 스펙을 가져, 어떤 옷을 입어도 러블리하면서
                  시크한 매력을 보여줍니다. K-POP 셀러브리티 최초 불가리 글로벌 앰배서더로
                  선정되기도 하며, 현재는 자신의 패션브랜드 라인인 ‘Manobal Lalisa’, ‘Manobal’ 의
                  시작을 앞두고 있습니다. 블랙핑크의 비율 끝판왕 리사의 룩을 확인해보세요.
                </p>
              </>
            ) : (
              <></>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default MemberInfo;
