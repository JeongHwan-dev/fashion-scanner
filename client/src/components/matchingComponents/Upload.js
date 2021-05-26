import React, { useState } from 'react';
import 'components/matchingComponents/css/Upload.css';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const Upload = () => {
  const url = `${window.location.origin}:5000`;
  const history = useHistory();
  const [attachment, setAttachment] = useState(''); // 첨부파일

  // [첨부파일] 업로드 핸들러
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

  // [첨부파일] Clear 핸들러
  const onClearAttachment = () => {
    setAttachment('');
  };

  // 사진 제출 핸들러
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
      <section className="upload">
        <div className="upload__inner">
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
      </section>
    </>
  );
};

export default Upload;
