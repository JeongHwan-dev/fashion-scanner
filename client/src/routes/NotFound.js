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
            <h2>페이지를 찾을 수 없습니다.</h2>
            <span>입력하신 주소를 다시 한 번 확인해주세요.</span>
            <Link to="/">메인페이지 바로가기</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
