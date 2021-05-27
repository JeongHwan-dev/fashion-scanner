import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import Example from 'components/matchingComponents/Example';
import 'components/matchingComponents/css/Picture.css';

const Picture = () => {
  const url = `${window.location.origin}:5000`;
  const history = useHistory();
  const [attachment, setAttachment] = useState('');

  // [옷 사진] 업로드 핸들러
  const onFileChange = (event) => {
    const {
      target: { files },
    } = event;
    const theFile = files[0];
    const reader = new FileReader();

    reader.onloadend = (finishedEvent) => {
      const {
        currentTarget: { result },
      } = finishedEvent;
      setAttachment(result);
    };
    reader.readAsDataURL(theFile);
  };

  // [옷 사진] 지우기 핸들러
  const onClearAttachment = () => {
    setAttachment('');
  };

  // [옷 사진] 제출 핸들러
  const onSubmit = async (event) => {
    event.preventDefault();
    console.log(attachment);
    await axios
      .post(url + '/match', {
        body: JSON.stringify({
          user_image: attachment,
        }),
      })
      .then(() => {
        history.puch({
          pathname: '/loading',
        });
      })
      .catch(() => {
        alert('error');
      });
  };

  return (
    <>
      <section className="picture">
        <div className="picture__upload">
          <ul>
            <li className="upload__title">
              <h1>가장 자주 입는 옷 사진을 올려주세요.</h1>
            </li>
            <li className="upload__btn">
              <label className="material-icons" for="input-file">
                add_a_photo
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
                  <img src={attachment} alt="첨부한 이미지" />
                  <span className="material-icons" onClick={onClearAttachment}>
                    clear
                  </span>
                </div>
              )}
            </li>
          </ul>
        </div>
        <Example />
        <div className="picture__submit">
          <button onClick={onSubmit}>결과보기</button>
        </div>
      </section>
    </>
  );
};

export default Picture;
