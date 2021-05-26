import React from 'react';
import 'components/matchingComponents/css/Upload.css';

const Upload = () => {
  return (
    <>
      <section className="upload">
        <div className="upload__inner">
          <ul>
            <li className="upload__title">
              <h1>가장 자주 입는 옷 사진을 올려주세요.</h1>
            </li>
            <li className="upload__btn">
              <label for="input-file">File Upload</label>
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
      </section>
    </>
  );
};

export default Upload;
