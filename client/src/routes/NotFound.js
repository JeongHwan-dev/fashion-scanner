import React from 'react';
import 'routes/css/NotFound.css';

const NotFound = () => {
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
            <h2>잠시 오류가 발생했습니다.</h2>
            <a href="/">메인페이지 바로가기</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
