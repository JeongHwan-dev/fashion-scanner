import React from 'react';
import { Link } from 'react-router-dom';
import 'components/lookbookComponents/css/Others.css';

const Others = () => {

  return (
    <>
      <section className="others">
        <div className="others__inner">
          <div className="others__dsc">
            <h2>
              다른 멤버 <br /> 확인하기
            </h2>
          </div>
          <div className="others__img">
            <Link to="/">
              <img src={require('images/lookbook_members_jennie.png').default} alt="jennie" />
            </Link>
            <Link to="/">
              <img src={require('images/lookbook_members_jisoo.png').default} alt="jennie" />
            </Link>
            <Link to="/">
              <img src={require('images/lookbook_members_lisa.png').default} alt="jennie" />
            </Link>
            <Link to="/">
              <img src={require('images/lookbook_members_rose.png').default} alt="jennie" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Others;
