import React from 'react';
import 'components/matchingComponents/css/MatchingTitle.css';

const MatchingTitle = () => {
  return (
    <>
      <section className="matchingTitle">
        <div className="matchingTitle__inner">
          <img src={require('images/members_photo.jpg').default} alt="Members Photo" />
          <img src={require('images/matching_logo3.png').default} alt="WHICH MEMBER ARE YOU?" />
        </div>
      </section>
    </>
  );
};

export default MatchingTitle;
