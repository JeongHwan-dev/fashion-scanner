import Footer from 'components/commonComponents/Footer';
import React from 'react';
import { Link } from 'react-router-dom';
import 'routes/css/NotFound.css';

const NotFound = () => {
  return (
    <>
      {/* NOT FOUND MAIN PAGE */}
      <div className="notfound">
        <div className="notfound__inner">
          <div className="notfound__img">
            <img src={require('images/notfound_heart.png').default} alt="heart" />
            <img src={require('images/notfound.png').default} alt="blackpink" />
          </div>
          <div className="notfound__dsc">
            <h2>Oops!</h2>
            <h2>잠시 오류가 발생했습니다.</h2>
            <Link to="/">메인페이지 바로가기</Link>
          </div>
        </div>
      </div>
      {/* FOOTER */}
      <Footer />
    </>
  );
};

export default NotFound;
