import React, { useState } from 'react';
import swal from 'sweetalert';
import 'components/homeComponents/css/Request.css';

const Request = () => {
  const [requestImg, setRequestImg] = useState('images/request_sample.jpg');
  const [email, setEmail] = useState('');
  const [agree, setAgree] = useState(false);

  // [요청 사진] 업로드 핸들러
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
      setRequestImg(result);
    };
    reader.readAsDataURL(theFile);
  };

  // [이메일] 입력 핸들러
  const onEmailHandler = (event) => {
    const {
      target: { value },
    } = event;
    setEmail(value);
  };

  // [이메일 수집 및 이용 동의] 체크 핸들러
  const onAgreeHandler = (event) => {
    const {
      target: { checked },
    } = event;
    setAgree(checked);
  };

  // [요청 사진] 제출 핸들러
  const onRequestHanlder = (event) => {
    if (requestImg !== 'images/request_sample.jpg') {
      if (email) {
        if (agree == true) {
          swal({
            title: '요청 완료',
            text: '1주일 이내로 알람 메일을 보내드립니다.',
            icon: 'success',
            button: '확인',
          });
        } else {
          swal({
            title: '요청 실패',
            text: '이메일 수집 및 이용에 대한 동의 부탁드립니다.',
            icon: 'warning',
            button: '확인',
          });
        }
      } else {
        swal({
          title: '요청 완료',
          text: '요청해 주신 사진 업데이트는 약 1주일 간의 시간이 소요됩니다.',
          icon: 'success',
          button: '확인',
        });
      }
    } else {
      swal({
        title: '요청 실패',
        text: '업로드한 이미지 파일이 없습니다.',
        icon: 'error',
        button: '확인',
      });
    }
  };

  return (
    <>
      <section className="request">
        <div className="request__inner">
          <div className="request__title">
            <h2>
              패션스캐너를 즐기는
              <br />또 다른 방법
            </h2>
            <p>
              <span>#FASHIONSCANNER</span>
              <span>#요청하기</span>
            </p>
          </div>
          <div className="request__body">
            <div className="body__image">
              <div className="image__preview">
                <img src={requestImg} alt="sample" />
              </div>
              <div className="image__upload">
                <label className="material-icons" for="reqeust-file">
                  upload_file <span>사진 업로드</span>
                </label>
                <input
                  type="file"
                  id="reqeust-file"
                  accept="image/*"
                  onChange={onFileChange}
                  style={{ display: 'none' }}
                />
              </div>
            </div>
            <div className="body__info">
              <p>
                룩북에 추가하고 싶은 사진이 있으신가요?
                <br />
                블랙핑크 멤버가 입은 옷과 비슷한 옷을 한 번에 찾고 싶으신가요? 그럼 사진을 공유해
                주세요!
                <br />
                요청해 주신 사진은 패션 스캐너의 인공지능 시스템을 거쳐 룩북에 추가될 예정입니다.
              </p>
              <span>&#8251; 이메일 입력 시 요청 사진이 업로드되면 알림 메일을 보내드립니다.</span>
              <form>
                <div className="info__input">
                  <input type="text" onChange={onEmailHandler} placeholder="이메일" />
                  <p className="info__agree">&nbsp;&nbsp;* 이메일 입력은 선택사항입니다.</p>
                  <label>
                    <input type="checkbox" onClick={onAgreeHandler} />
                    이메일 수집 및 이용에 대한 동의
                  </label>
                </div>
              </form>
              <button onClick={onRequestHanlder}>요청하기</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Request;
