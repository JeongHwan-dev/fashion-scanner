import React from 'react';
import 'components/matchingComponents/css/MatchingTitle.css';

const MatchingTitle = () => {
  return (
    <>
      <section className="matchingTitle">
        <div className="matchingTitle__inner">
          <img src={require('images/members_photo.jpg').default} alt="Members Photo" />
          <img src={require('images/matching_logo3.png').default} alt="WHICH MEMBER ARE YOU?" />
          <a className="material-icons" href="#section__picture">
            expand_more
          </a>
        </div>
      </section>
    </>
  );
};

export default MatchingTitle;
