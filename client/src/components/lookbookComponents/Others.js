import React from 'react';
import { Link } from 'react-router-dom';
import 'components/lookbookComponents/css/Others.css';

const Others = () => {
  return (
    <>
      <section className="others">
        <img
          className="inner__bg"
          src={require('images/member_select_bg.png').default}
          alt="BLACKPINK BACKGROUND"
        />
        <div className="others__inner">
          <div className="others__title">
            <h2>CHECK OUT THE OTHER MEMBERS</h2>
          </div>
          <div className="others__img">
            <div className="img__line1">
              <Link to="/lookbook/jisoo">
                <img
                  className="img1"
                  src={require('images/lookbook_members_jisoo.png').default}
                  alt="jisoo"
                />
              </Link>
              <Link to="/lookbook/lisa">
                <img
                  className="img2"
                  src={require('images/lookbook_members_lisa.png').default}
                  alt="lisa"
                />
              </Link>
            </div>
            <div className="img__line2">
              <Link to="/lookbook/jennie">
                <img
                  className="img3"
                  src={require('images/lookbook_members_jennie.png').default}
                  alt="jennie"
                />
              </Link>
              <Link to="/lookbook/rose">
                <img
                  className="img4"
                  src={require('images/lookbook_members_rose.png').default}
                  alt="rose"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Others;
