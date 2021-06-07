import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import 'components/commonComponents/css/Footer.css';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'react-responsive';

const Footer = () => {
  const { t } = useTranslation('footer');
  const isMobile = useMediaQuery({ maxWidth: 375 });
  // console.log(isMobile);

  return (
    <>
      <footer>
        <div className="inner">
          <div className="info">
            <div className="info__contact">
              <ul>
                <li>
                  <img src="/images/common/fs_s2_logo.png" alt="FASHION SCANNER" />
                </li>
                <li>
                  <p>
                    <span className="material-icons">place</span>
                    {!isMobile ? t('pcAddress') : t('mobileAddress')}{' '}
                  </p>
                </li>
                <li>
                  <p>
                    <span className="material-icons">phone</span>
                    {t('call')}
                  </p>
                </li>
                <li>
                  <p>
                    <span className="material-icons">email</span>
                    support@fashionscanner.com
                  </p>
                </li>
              </ul>
            </div>
            <div className="info__team">
              <ul>
                <li className="team__dev">
                  <ul>
                    <li>
                      <a href="/devTeam">ABOUT US</a>
                    </li>
                    <li>
                      <a href="/faq">{t('faq')}</a>
                    </li>
                  </ul>
                </li>
                <li className="team__sns">
                  <ul>
                    <li>
                      <h3>GET TO KNOW US</h3>
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faFacebook} className="sns__icon" />
                      <FontAwesomeIcon icon={faInstagram} className="sns__icon" />
                      <FontAwesomeIcon icon={faTwitter} className="sns__icon" />
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <div className="copyright">
            <p>
              <span className="material-icons">copyright</span>
              Copyright Fashion Scanner. All Rights Reserved, 2021
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
