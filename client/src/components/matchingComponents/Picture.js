import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';
import Example from 'components/matchingComponents/Example';
import 'components/matchingComponents/css/Picture.css';
import { useTranslation } from 'react-i18next';

const Picture = () => {
  const url = `http://elice-kdt-ai-track-vm-ai-13.koreacentral.cloudapp.azure.com:8000`;
  const history = useHistory();
  const [previewImg, setPreviewImg] = useState('');
  const [requestImg, setRequestImg] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const { t } = useTranslation('picture');

  // [매칭 요청 사진] 업로드 핸들러
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

  // [매칭 요청 사진] 지우기 핸들러
  const onClearPreviewImg = () => {
    setPreviewImg('');
  };

  // [매칭 요청 사진] 제출 핸들러
  const onSubmit = async () => {
    if (requestImg) {
      const formData = new FormData();
      const config = {
        headers: {
          'content-type': 'multipart/form-data',
        },
      };

      formData.append('userImage', requestImg);
      console.log(formData);

      await axios
        .post(url + '/api/user/matching', formData, config)
        .then((response) => {
          if (response.status === 200) {
            swal({
              title: '사진 전송 완료',
              text: '',
              icon: 'success',
              button: '확인',
            });

            history.push({
              pathname: '/matching/loading',
            });
          }
        })
        .catch(() => {
          swal({
            title: '사진 전송 오류',
            text: 'error',
            icon: 'warning',
            button: '확인',
          });
        });
    } else {
      swal({
        title: '스캐닝 실패',
        text: '업로드한 이미지 파일이 없습니다.',
        icon: 'error',
        button: '확인',
      });
    }
  };

  // [사진 제공 동의] 체크 핸들러
  const onCheckHandler = () => {
    setIsChecked(!isChecked);
  };

  return (
    <>
      <section className="picture" id="section__picture">
        <div className="picture__inner">
          <div className="picture__upload">
            <ul>
              <li className="upload__title">
                <h1>{t('upload_title')}</h1>
              </li>
              <li className="upload__btn">
                <label className="material-icons" for="input-file">
                  add_a_photo
                </label>
                <input
                  type="file"
                  id="input-file"
                  accept="image/*;capture=camera"
                  onChange={onFileChange}
                  style={{ display: 'none' }}
                />
                {previewImg && (
                  <div className="upload__preview">
                    <img src={previewImg} alt="첨부한 이미지" />
                    <span className="material-icons" onClick={onClearPreviewImg}>
                      clear
                    </span>
                  </div>
                )}
              </li>
            </ul>
          </div>
          <Example />
          <div className="picture__agree">
            <p>
              {t('picture_agree')}
            </p>
            <label>
              <input type="checkbox" checked={isChecked} onChange={onCheckHandler} />
              {t('picture_agree_box')}
            </label>
          </div>
          <div className="picture__submit">
            <button disabled={!isChecked} onClick={onSubmit}>
              {t('picture_submit')}
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Picture;
