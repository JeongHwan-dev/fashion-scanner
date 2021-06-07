import React from 'react';
import { useMediaQuery } from 'react-responsive';
import 'components/homeComponents/css/MemberMatching.css';
import { useTranslation } from 'react-i18next';

const MemberMatching = () => {
  const isMobile = useMediaQuery({ maxWidth: 375 });
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
                {t('contents__dsc1')}
                <br />
                {t('contents__dsc2')}
              </p>
            </div>
            {!isMobile && (
              <>
                <div className="contents__btn">
                  <a href="/matching">{t('contents__btn')}</a>
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
                <a href="/matching">{t('contents__btn')}</a>
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default MemberMatching;
