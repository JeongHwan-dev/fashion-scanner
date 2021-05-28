import React from 'react';
import { Link } from 'react-router-dom';
import 'components/lookbookComponents/css/Others.css';

const Others = () => {
  return (
    <>
      <section className="others">
        <div className="others__inner">
          <div className="others__dsc">
            <h2>CHECK THE OTHERS</h2>
          </div>
          <div className="others__img">
            {/* <div className="others__jn"> */}
              <Link to="/">
                <img src={require('images/lookbook_members_jennie.png').default} alt="jennie" />
              </Link>
            {/* </div> */}
            {/* <div className="others__js"> */}
              <Link to="/">
                <img src={require('images/lookbook_members_jisoo.png').default} alt="jisoo" />
              </Link>
            {/* </div> */}
            {/* <div className="others__ls"> */}
              <Link to="/">
                <img src={require('images/lookbook_members_lisa.png').default} alt="lisa" />
              </Link>
            {/* </div> */}
            {/* <div className="others__rs"> */}
              <Link to="/">
                <img src={require('images/lookbook_members_rose.png').default} alt="rose" />
              </Link>
            {/* </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Others;
