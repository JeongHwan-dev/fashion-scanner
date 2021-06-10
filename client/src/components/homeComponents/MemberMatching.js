import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { useTranslation } from 'react-i18next';
import 'components/homeComponents/css/MemberMatching.css';

const MemberMatching = () => {
  const isMobile = useMediaQuery({ maxWidth: 500 });
  const { t } = useTranslation('memberMatching');

  return (
    <>
      <section className="memberMatching" id="section__memberMatching">
        <div className="memberMatching__inner">
          <div className="memberMatching__contents">
            <div className="contents__title">
              <img src="/images/home/matching_logo1.png" alt="WHICH MEMBER" />
              <img src="/images/home/matching_logo2.png" alt="ARE YOU?" />
            </div>
            <div className="contents__dsc">
              <p>
                {t('contents_dsc1')}
                <br />
                {t('contents_dsc2')}
              </p>
            </div>
            {!isMobile && (
              <>
                <div className="contents__btn">
                  <a href="/matching">{t('contents_btn')}</a>
                </div>
              </>
            )}
          </div>
          <div className="memberMatching__img">
            <img src="/images/home/matching_group_photo.png" alt="GROUP Photo" />
          </div>
          {isMobile && (
            <>
              <div className="contents__btn">
                <a href="/matching">{t('contents_btn')}</a>
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default MemberMatching;
