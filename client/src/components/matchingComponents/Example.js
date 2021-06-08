import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { useTranslation } from 'react-i18next';
import 'components/matchingComponents/css/Example.css';

const Example = () => {
  const isMobile = useMediaQuery({ maxWidth: 390 });
  const { t } = useTranslation('example');
  return (
    <>
      <div className="picture__example">
        <div className="example__good">
          {!isMobile && (
            <>
              <img src="/images/matching/good_example.png" alt="Good Example" />
            </>
          )}
          <div className="good__dsc">
            {!isMobile ? (
              <>
                <h2>{t('bad_dsc1')}</h2>
                <p>
                  {t('bad_dsc2')}
                  <br />
                  {t('bad_dsc3')}
                  <br />
                  {t('bad_dsc4')}
                  <br />
                  {t('bad_dsc5')}
                </p>
              </>
            ) : (
              <>
                <h2>{t('good_dsc1')}</h2>
                <p>
                  {t('good_dsc2')}
                  <br />
                  {t('good_dsc3')}
                  <br />
                  {t('good_dsc4')}
                </p>
              </>
            )}
          </div>
          {isMobile && (
            <>
              <img src="/images/matching/good_example.png" alt="Good Example" />
            </>
          )}
        </div>
        <div className="example__bad">
          <div className="bad__dsc">
            {!isMobile ? (
              <>
                <h2>{t('good_dsc1')}</h2>
                <p>
                  {t('good_dsc2')}
                  <br />
                  {t('good_dsc3')}
                  <br />
                  {t('good_dsc4')}
                </p>
              </>
            ) : (
              <>
                <h2>{t('bad_dsc1')}</h2>
                <p>
                  {t('bad_dsc2')}
                  <br />
                  {t('bad_dsc3')}
                  <br />
                  {t('bad_dsc4')}
                  <br />
                  {t('bad_dsc5')}
                </p>
              </>
            )}
          </div>
          <img src="/images/matching/bad_example.png" alt="Bad Example" />
        </div>
      </div>
    </>
  );
};

export default Example;
