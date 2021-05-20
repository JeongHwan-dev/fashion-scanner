import React from 'react';

import Navigation from 'components/Navigation';

import 'routes/css/Member.css';

const Member = () => {
  return (
    <>
      <Navigation />
      <section>
        <div className="member__title">
          <img src={require('images/members_photo.jpg').default} alt="Members Photo" />
          <img src={require('images/member_logo3.png').default} alt="WHICH MEMBER ARE YOU?" />
        </div>
        <div className="member__upload">
          <ul>
            <li>
              <h1>가장 자주 입는 옷 사진을 올려주세요.</h1>
            </li>
            <li>
              <button>File Upload</button>
            </li>
          </ul>
        </div>
      </section>
      {/* <footer>
        <div className="inner"></div>
      </footer> */}
    </>
  );
};

export default Member;
