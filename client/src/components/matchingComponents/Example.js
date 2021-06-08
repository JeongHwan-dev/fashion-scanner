import React from 'react';
import { useMediaQuery } from 'react-responsive';
import 'components/matchingComponents/css/Example.css';

const Example = () => {
  const isMobile = useMediaQuery({ maxWidth: 375 });
  return (
    <>
      <div className="picture__example">
        <div className="example__good">
          {!isMobile && (
            <>
              <img src="/images/matching/good_example.png" alt="Good Example" />
            </>
          )}
          <div className="good__dsc">
            {!isMobile ? (
              <>
                <h2>나쁜 예</h2>
                <p>
                  여러명이 함께 찍은 사진은 분석할 수가 없습니다.
                  <br />
                  배경색이 다양할수록 분석의 정확도가 떨어집니다.
                  <br />
                  흑백사진은 분석 시 정확한 결과를 얻기가 힘듭니다.
                  <br />
                  옷의 일부만 보이는 사진은 제대로 분석 할 수 없습니다.
                </p>
              </>
            ) : (
              <>
                <h2>좋은 예</h2>
                <p>
                  배경색은 흰색에 가까울 수록 좋습니다.
                  <br />
                  정면을 보고 바르게 선 자세로 찍은 사진일 수록 분석의 정확도가 높아집니다.
                  <br />
                  거울셀카보다는 다른 사람이 찍어준 사진을 활용해보세요.
                </p>
              </>
            )}
          </div>
          {isMobile && (
            <>
              <img src="/images/matching/good_example.png" alt="Good Example" />
            </>
          )}
        </div>
        <div className="example__bad">
          <div className="bad__dsc">
            {!isMobile ? (
              <>
                <h2>좋은 예</h2>
                <p>
                  배경색은 흰색에 가까울 수록 좋습니다.
                  <br />
                  정면을 보고 바르게 선 자세로 찍은 사진일 수록 분석의 정확도가 높아집니다.
                  <br />
                  거울셀카보다는 다른 사람이 찍어준 사진을 활용해보세요.
                </p>
              </>
            ) : (
              <>
                <h2>나쁜 예</h2>
                <p>
                  여러명이 함께 찍은 사진은 분석할 수가 없습니다.
                  <br />
                  배경색이 다양할수록 분석의 정확도가 떨어집니다.
                  <br />
                  흑백사진은 분석 시 정확한 결과를 얻기가 힘듭니다.
                  <br />
                  옷의 일부만 보이는 사진은 제대로 분석 할 수 없습니다.
                </p>
              </>
            )}
          </div>
          <img src="/images/matching/bad_example.png" alt="Bad Example" />
        </div>
      </div>
    </>
  );
};

export default Example;
