import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { useTranslation } from 'react-i18next';
import magazine from 'videos/magazine.mp4';
import 'components/homeComponents/css/Magazine.css';

const Magazine = () => {
  const isMobile = useMediaQuery({ maxWidth: 390 });
  const { t } = useTranslation('magazine');

  return (
    <>
      <section className="magazine" id="section__magazine">
        <div className="magazine__inner">
          <div className="magazine__title">
            <img src="/images/home/blackpink_logo.png" alt="BLACKPINK" />
          </div>
          <div className="magazine__info">
            <div className="magazine__video">
              <video autoPlay muted>
                <source src={magazine} type="video/mp4" />
              </video>
            </div>
            <div className="magazine__dsc">
              {!isMobile ? (
                <>
                  <p>
                    {t('magazine_dsc1')}
                    <br />
                    {t('magazine_dsc2')}
                    <br />
                    {t('magazine_dsc3')}
                    <br />
                    "Never wear the same outfits"
                    <br />
                    {t('magazine_dsc4')}
                  </p>
                </>
              ) : (
                <>
                  <p>
                    {t('m-magazine_dsc1')}
                    <br />
                    {t('m-magazine_dsc2')}
                    <br />
                    "Never wear the same outfits"
                    <br />
                    {t('m-magazine_dsc3')}
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Magazine;
