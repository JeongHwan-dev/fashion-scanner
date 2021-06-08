import React from 'react';
import { useTranslation } from 'react-i18next';
import 'routes/css/NotFound.css';

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
            <h2>{t('something_went_wrong')}</h2>
            <span>{t('try_again')}</span>
            <a href="/">{t('go_back_to_main')}</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
