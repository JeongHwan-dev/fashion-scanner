import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import 'components/commonComponents/css/Footer.css';

const Footer = () => {
  return (
    <>
      <footer>
        <div className="inner">
          <div className="info">
            <div className="info__contact">
              <ul>
                <li>
                  <img src="/images/fs_logo3.png" alt="FASHION SCANNER" />
                </li>
                <li>
                  <p>
                    <span className="material-icons">place</span>
                    강남구 선릉로 433 세방빌딩 6층
                  </p>
                </li>
                <li>
                  <p>
                    <span className="material-icons">phone</span>
                    02-5986-8861
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
                      <a href="/faq">자주 묻는 질문</a>
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
