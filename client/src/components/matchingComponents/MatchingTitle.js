import React from 'react';
import 'components/matchingComponents/css/MatchingTitle.css';

const MatchingTitle = () => {
  return (
    <>
      <section className="matchingTitle">
        <div className="matchingTitle__inner">
          <img src="/images/matching/matching_blackpink_photo.jpg" alt="Members Photo" />
          <img src="/images/matching/matching_logo3.png" alt="WHICH MEMBER ARE YOU?" />
          <a className="material-icons" href="#section__picture">
            expand_more
          </a>
        </div>
      </section>
    </>
  );
};

export default MatchingTitle;
