import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import 'components/matchingComponents/css/InfoCard.css';

const InfoCard = ({ memberObj, imgObj, isShared, isClicked }) => {
  const { t } = useTranslation('infoCard');

  useEffect(() => {
    createKakaoButton();
  }, []);

  // 카카오톡 공유하기
  const createKakaoButton = () => {
    if (window.Kakao) {
      const kakao = window.Kakao;
      if (!kakao.isInitialized()) {
        kakao.init(process.env.REACT_APP_KAKAO_INIT_KEY);
      }

      window.Kakao.Link.createDefaultButton({
        container: '#create-kakao-link-btn',
        objectType: 'feed',
        content: {
          title: 'FASHION SCANNER',
          description: '#AI #FASHION #SCANNING #BLACKPINK #MATCHING',
          imageUrl: 'https://www.fashion-scanner.site/images/common/fs_sharing_logo.png',
          link: {
            mobileWebUrl: `https://www.fashion-scanner.site/matching/sharing/${memberObj.name}`,
            webUrl: `https://www.fashion-scanner.site/matching/sharing/${memberObj.name}`,
          },
        },
        buttons: [
          {
            title: '매칭 결과 보기',
            link: {
              mobileWebUrl: `https://www.fashion-scanner.site/matching/sharing/${memberObj.name}`,
              webUrl: `https://www.fashion-scanner.site/matching/sharing/${memberObj.name}`,
            },
          },
        ],
      });
    }
  };

  // 페이스북 공유하기 핸들러
  const onSharingFacebook = () => {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=https://www.fashion-scanner.site/matching/sharing/${memberObj.name}`,
    );
  };

  // 트위터 공유하기 핸들러
  const onSharingTwitter = () => {
    window.open(
      `https://www.twitter.com/intent/tweet?&url=https://www.fashion-scanner.site/matching/sharing/${memberObj.name}`,
    );
  };

  return (
    <>
      <div className={`infoCard ${isClicked ? 'clicked' : ''} ${isShared ? 'shared' : ''}`}>
        <div className="infoCard__dsc">
          <p>
            {memberObj.title}
            <br />
            {memberObj.comment1}
            <br />
            {memberObj.comment2}
          </p>
        </div>
        {isShared ? (
          <></>
        ) : (
          <>
            <div className="infoCard__imgObj">
              <table>
                <thead>
                  <tr>
                    <th colSpan="2">{t('infoCard_imgObj')}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Type</td>
                    <td>
                      <span className="imgObj__data">#{imgObj.category}</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Feature</td>
                    <td>
                      {localStorage.i18nextLng === 'ko' ? (
                        <>
                          <span className="imgObj__data">#{imgObj.attributes[0]}</span>
                          <span className="imgObj__data">#{imgObj.attributes[1]}</span>
                          <span className="imgObj__data">#{imgObj.attributes[2]}</span>
                        </>
                      ) : (
                        <>
                          <span className="imgObj__data">#{imgObj.attributes[0]}</span>
                          <span className="imgObj__data">#{imgObj.attributes[1]}</span>
                          <br />
                          <span className="imgObj__data">#{imgObj.attributes[2]}</span>
                        </>
                      )}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </>
        )}
        <div className="infoCard__btn">
          <a href={`/lookbook/${memberObj.name}`}>{memberObj.btnLabel}</a>
        </div>
        <div className="sharing__box">
          <p className="sharing__title">{t('sharing_title')}</p>
          <div className="sharing__btns">
            <div className="sharing__kakaotalk">
              <a className="sharing__a" id="create-kakao-link-btn" href="#">
                <img src="https://developers.kakao.com/assets/img/about/logos/kakaolink/kakaolink_btn_medium.png" />
              </a>
            </div>
            <div className="sharing__facebook">
              <button className="sharing__btn" onClick={onSharingFacebook}>
                <img src="/images/matching/facebook_logo.png" alt="facebook" />
              </button>
            </div>
            <div className="sharing__twitter">
              <button className="sharing__btn" onClick={onSharingTwitter}>
                <img src="/images/matching/twitter_logo.png" alt="twitter" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InfoCard;
