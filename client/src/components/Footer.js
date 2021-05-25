import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import 'components/css/Footer.css';

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer__inner">
          <div className="footer__info">
            <div className="info__contact">
              <ul>
                <li>
                  <span className="material-icons">place</span>
                  <span>강남구 선릉로 433 세방빌딩 6층 (주)패션스케너</span>
                </li>
                <li>
                  <span className="material-icons">phone</span>
                  <span>02-5986-8861</span>
                </li>
                <li>
                  <span className="material-icons">email</span>
                  <span>support@fashionscanner.com</span>
                </li>
              </ul>
            </div>
            <div className="info__sns">
              <h3>GET TO KNOW US</h3>
              <FontAwesomeIcon icon={faFacebook} className="sns__icon" />
              <FontAwesomeIcon icon={faInstagram} className="sns__icon" />
              <FontAwesomeIcon icon={faTwitter} className="sns__icon" />
            </div>
          </div>
          <div className="footer__copyright">
            <span className="material-icons">copyright</span>
            <span>Copyright Fashion Scanner. All Rights Reserved, 2021</span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
