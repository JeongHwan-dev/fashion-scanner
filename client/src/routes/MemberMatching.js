import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import Navigation from 'components/commonComponents/Navigation';
import Footer from 'components/commonComponents/Footer';
import MatchingTitle from 'components/matchingComponents/MatchingTitle';
import 'routes/css/MemberMatching.css';
import Example from 'components/matchingComponents/Example';
import Upload from 'components/matchingComponents/Upload';
import Submit from 'components/matchingComponents/Submit';

const Matching = () => {
  // const url = `${window.location.origin}:5000`;
  // const history = useHistory();
  // const [attachment, setAttachment] = useState(''); // 첨부파일

  // // [첨부파일] 업로드 핸들러
  // const onFileChange = (event) => {
  //   const {
  //     target: { files },
  //   } = event;
  //   const theFile = files[0];
  //   const reader = new FileReader();

  //   reader.onloadend = (finishedEvent) => {
  //     const {
  //       currentTarget: { result },
  //     } = finishedEvent;
  //     setAttachment(result);
  //   };
  //   reader.readAsDataURL(theFile);
  // };

  // // [첨부파일] Clear 핸들러
  // const onClearAttachment = () => {
  //   setAttachment('');
  // };

  // // 사진 제출 핸들러
  // const onSubmit = async (event) => {
  //   event.preventDefault();
  //   console.log(attachment);
  //   await axios
  //     .post(url + '/match', {
  //       body: JSON.stringify({
  //         user_image: attachment,
  //       }),
  //     })
  //     .then(() => {
  //       history.puch({
  //         pathname: '/loading',
  //       });
  //     })
  //     .catch(() => {
  //       alert('error');
  //     });
  // };

  return (
    <>
      <Navigation />
      <MatchingTitle />
      <Upload />
      <Example />
      <Submit />
      {/* <section className="page__member">
        <div className="member__title">
          <img src={require('images/members_photo.jpg').default} alt="Members Photo" />
          <img src={require('images/matching_logo3.png').default} alt="WHICH MEMBER ARE YOU?" />
        </div>
        <div className="member__upload">
          <ul>
            <li>
              <h1>가장 자주 입는 옷 사진을 올려주세요.</h1>
            </li>
            <li>
              <label className="upload__btn" for="input-file">
                File Upload
              </label>
              <input
                type="file"
                id="input-file"
                accept="image/*"
                onChange={onFileChange}
                style={{ display: 'none' }}
              />
              {attachment && (
                <div className="upload__preview">
                  <img src={attachment} alt="첨부한 이미지" className="preview__attachment" />
                  <div onClick={onClearAttachment}>
                    <span>X</span>
                  </div>
                </div>
              )}
            </li>
          </ul>
        </div>
        <div className="member__example">
          <div className="example__inner">
            <div className="example__good">
              <img
                src={require('images/good_example.png').default}
                alt="Good Example"
                className="good__photo photo1"
              />
              <div className="good__description">
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
            </div>
            <div className="example__bad">
              <div className="bad__description">
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
              <img
                src={require('images/bad_example.png').default}
                alt="Bad Example"
                className="bad__photo photo1"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="submit">
        <button onClick={onSubmit}>결과보기</button>
      </section> */}
      <Footer />
    </>
  );
};

export default Matching;
