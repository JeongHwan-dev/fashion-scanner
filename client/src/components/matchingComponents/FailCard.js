import React from 'react';
import { useTranslation } from 'react-i18next';
import 'components/matchingComponents/css/FailCard.css';

const FailCard = () => {
  const { t } = useTranslation('failCard');

  return (
    <>
      <div className="failCard__inner">
        <div className="failCard__img">
          <img src="/images/matching/failure_group_photo.jpg" alt="Failure" />
        </div>
        <div className="failCard__text">
          <p>{t('failCard_text1')}</p>
          <p>{t('failCard_text2')}</p>
        </div>
        <div className="failCard__btn">
          <a href="/matching">
            <label>{t('failCard_btn')}</label>
          </a>
        </div>
      </div>
    </>
  );
};

export default FailCard;
