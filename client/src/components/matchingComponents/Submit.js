import React, { useState } from 'react';
import 'components/matchingComponents/css/Submit.css';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const Submit = () => {
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
      <section className="submit">
        <div className="submit__inner">
          <button onClick={onSubmit}>결과보기</button>
        </div>
      </section>
    </>
  );
};

export default Submit;
