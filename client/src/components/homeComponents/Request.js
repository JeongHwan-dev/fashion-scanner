import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import swal from 'sweetalert';
import 'components/homeComponents/css/Request.css';

const Request = () => {
  const isMobile = useMediaQuery({ maxWidth: 500 });
  const { t } = useTranslation('request');
  const [previewImg, setPreviewImg] = useState('/images/request_sample.jpg');
  const [requestImg, setRequestImg] = useState('');
  const [email, setEmail] = useState('');
  const [isChecked, setIsChecked] = useState(false);

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
      setPreviewImg(result);
    };
    reader.readAsDataURL(theFile);
    setRequestImg(theFile);
  };

  // [이메일] 입력 핸들러
  const onEmailHandler = (event) => {
    const {
      target: { value },
    } = event;
    setEmail(value);
  };

  // [이메일] 유효성 검사
  const isEmail = (inputEmail) => {
    var regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    return regExp.test(inputEmail);
  };

  // [이메일 수집 및 이용 동의] 체크 핸들러
  const onCheckHandler = () => {
    setIsChecked(!isChecked);
  };

  // [요청 사진] 제출 핸들러 (KOR)
  const onRequestKoHanlder = async () => {
    if (requestImg) {
      if (email) {
        if (isChecked === true) {
          // 사진 업로드, 이메일 작성, 정보 제공 동의 체크 모두 완료 시
          if (isEmail(email)) {
            // 유효한 이메일 형식일 경우
            const formData = new FormData();
            const config = {
              headers: {
                'content-type': 'multipart/form-data',
              },
            };

            formData.append('userImage', requestImg);
            formData.append('email', email);

            await axios.post('/api/user/request', formData, config).then((response) => {
              if (response.status === 200) {
                setPreviewImg('images/request_sample.jpg');
                setRequestImg('');
                setEmail('');
                setIsChecked('');
              } else {
                alert('error');
              }
            });
            swal({
              title: '요청 완료',
              text: '1주일 이내로 알람 메일을 보내드립니다.',
              icon: 'success',
              button: '확인',
            });
          } else {
            // 유효 하지 않은 이메일 형식일 경우
            setEmail('');
            setIsChecked('');

            swal({
              title: '요청 실패',
              text: '이메일 형식이 맞지 않습니다.',
              icon: 'warning',
              button: '확인',
            });
          }
        } else {
          // 이메일 체크 미완료 시
          swal({
            title: '요청 실패',
            text: '이메일 수집 및 이용에 대한 동의 부탁드립니다.',
            icon: 'warning',
            button: '확인',
          });
        }
      } else {
        // 사진 업로드(이메일 미입력) 완료 시
        const formData = new FormData();
        const config = {
          headers: {
            'content-type': 'multipart/form-data',
          },
        };

        formData.append('userImage', requestImg);

        await axios.post('/api/user/request', formData, config).then((response) => {
          if (response.status === 200) {
            setPreviewImg('images/request_sample.jpg');
            setRequestImg('');
          } else {
            alert('error');
          }
        });
        swal({
          title: '요청 완료',
          text: '요청해 주신 사진 업데이트는 약 1주일 간의 시간이 소요됩니다.',
          icon: 'success',
          button: '확인',
        }).catch(() => {
          swal({
            title: '허용 사진 용량을 초과',
            text: '50MB 이하의 사진을 업로드해 주세요.',
            icon: 'warning',
            button: '확인',
          });
        });
      }
    } else {
      // 사진 업로드 미완료 시
      swal({
        title: '요청 실패',
        text: '업로드한 이미지 파일이 없습니다.',
        icon: 'error',
        button: '확인',
      });
    }
  };

  // [요청 사진] 제출 핸들러 (ENG)
  const onRequestEnHanlder = async () => {
    if (requestImg) {
      if (email) {
        if (isChecked === true) {
          // 사진 업로드, 이메일 작성, 정보 제공 동의 체크 모두 완료 시
          if (isEmail(email)) {
            // 유효한 이메일 형식일 경우
            const formData = new FormData();
            const config = {
              headers: {
                'content-type': 'multipart/form-data',
              },
            };

            formData.append('userImage', requestImg);
            formData.append('email', email);

            await axios.post('/api/user/request', formData, config).then((response) => {
              if (response.status === 200) {
                setPreviewImg('images/request_sample.jpg');
                setRequestImg('');
                setEmail('');
                setIsChecked('');
              } else {
                alert('error');
              }
            });
            swal({
              title: 'Request completed',
              text: 'We will send you an email notification within 1 week.',
              icon: 'success',
              button: 'Confirm',
            }).catch(() => {
              swal({
                title: 'Exceeds allowed photo capacity',
                text: 'Please upload a picture under 50MB.',
                icon: 'warning',
                button: 'Confirm',
              });
            });
          } else {
            // 유효 하지 않은 이메일 형식일 경우
            setEmail('');
            setIsChecked('');

            swal({
              title: 'Request Failed',
              text: 'The email format does not match.',
              icon: 'warning',
              button: 'Confirm',
            });
          }
        } else {
          // 이메일 체크 미완료 시
          swal({
            title: 'Request Failed',
            text: 'Please agree to collect and use e-mail.',
            icon: 'warning',
            button: 'Confirm',
          });
        }
      } else {
        // 사진 업로드(이메일 미입력) 완료 시
        const formData = new FormData();
        const config = {
          headers: {
            'content-type': 'multipart/form-data',
          },
        };

        formData.append('userImage', requestImg);

        await axios.post('/api/user/request', formData, config).then((response) => {
          if (response.status === 200) {
            setPreviewImg('images/request_sample.jpg');
            setRequestImg('');
          } else {
            alert('error');
          }
        });
        swal({
          title: 'Request completed',
          text: 'The photo update you requested will take about a week.',
          icon: 'success',
          button: 'Confirm',
        });
      }
    } else {
      // 사진 업로드 미완료 시
      swal({
        title: 'Request Failed',
        text: 'There is no image file uploaded.',
        icon: 'error',
        button: 'Confirm',
      });
    }
  };

  return (
    <>
      <section className="request" id="section__request">
        <div className="request__inner">
          <div className="request__title">
            <h2>
              {t('request_title1')}
              <br />
              {t('request_title2')}
            </h2>
            <p>
              <span>#FASHIONSCANNER</span>
              <span>{t('request_title_hashtag')}</span>
            </p>
          </div>
          <div className="request__body">
            <div className="body__image">
              <div className="image__preview">
                <img src={previewImg} alt="sample" />
              </div>
              <div className="image__upload">
                <label className="material-icons" htmlFor="reqeust-file">
                  upload_file<span>{t('image_upload')}</span>
                </label>
                {!isMobile ? (
                  <>
                    <input
                      type="file"
                      id="reqeust-file"
                      accept="image/*"
                      onChange={onFileChange}
                      style={{ display: 'none' }}
                    />
                  </>
                ) : (
                  <>
                    <input
                      type="file"
                      id="reqeust-file"
                      accept="image/png, image/jpeg, image/jpg"
                      onChange={onFileChange}
                      style={{ display: 'none' }}
                    />
                  </>
                )}
              </div>
            </div>
            <div className="body__info">
              <p>
                {t('body_info1')}
                <br />
                {t('body_info2')}
                <br />
                {t('body_info3')}
              </p>
              <span>&#8251; {t('body_info4')}</span>
              <form>
                <div className="info__input">
                  <input
                    type="email"
                    onChange={onEmailHandler}
                    value={email}
                    placeholder={`${localStorage.i18nextLng === 'ko' ? '이메일' : 'e-mail'}`}
                  />
                  <p className="info__agree">&nbsp;&nbsp;* {t('info_agree')}</p>
                  <label>
                    <input
                      type="checkbox"
                      disabled={!email}
                      checked={isChecked}
                      onChange={onCheckHandler}
                    />
                    {t('info_agree_box')}
                  </label>
                </div>
              </form>
              {localStorage.i18nextLng === 'en' ? (
                <>
                  <button onClick={onRequestEnHanlder}>{t('button')}</button>
                </>
              ) : (
                <>
                  <button onClick={onRequestKoHanlder}>{t('button')}</button>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Request;
