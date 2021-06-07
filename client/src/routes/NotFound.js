import React from 'react';
import 'routes/css/NotFound.css';
import { useTranslation } from 'react-i18next';

const NotFound = () => {
  const { t } = useTranslation('notFound');

  return (
    <>
      {/* NOT FOUND MAIN PAGE */}
      <div className="notfound">
        <div className="notfound__inner">
          <div className="notfound__img">
            <img src="/images/notFound/notfound_heart.png" alt="heart" />
            <img src="/images/notFound/notfound.png" alt="blackpink" />
          </div>
          <div className="notfound__dsc">
            <h2>Oops!</h2>
            <h2>{t('somethingWentWrong')}</h2>
            <span>{t('tryAgain')}</span>
            <a href="/">{t('goBackToMain')}</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
