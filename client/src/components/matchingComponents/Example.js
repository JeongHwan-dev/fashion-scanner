import React from 'react';
import 'components/matchingComponents/css/Example.css';

const Example = () => {
  return (
    <>
      <div className="picture__example">
        <div className="example__good">
          <img src="/images/matching/good_example.png" alt="Good Example" />
          <div className="good__dsc">
            <h2>좋은 예</h2>
            <p>
              여러 명이 함께 직은 사진은 분석할 수 없습니다.
              <br />
              배경의 색이 다양할 수록 분석의 정확도가 떨어집니다.
              <br />
              옷의 일부만 보이는 사진은 제대로 분석할 수 없습니다.
              <br />
              흑백사진은 분석 시 정확한 결과를 얻기가 힘듬니다.
            </p>
          </div>
        </div>
        <div className="example__bad">
          <div className="bad__dsc">
            <h2>나쁜 예</h2>
            <p>
              여러 명이 함께 직은 사진은 분석할 수 없습니다.
              <br />
              배경의 색이 다양할 수록 분석의 정확도가 떨어집니다.
              <br />
              옷의 일부만 보이는 사진은 제대로 분석할 수 없습니다.
              <br />
              흑백사진은 분석 시 정확한 결과를 얻기가 힘듬니다.
            </p>
          </div>
          <img src="/images/matching/bad_example.png" alt="Bad Example" />
        </div>
      </div>
    </>
  );
};

export default Example;
