import React, { useEffect } from 'react';
import Navigation from 'components/commonComponents/Navigation';
import Footer from 'components/commonComponents/Footer';
import MemberInfo from 'components/lookbookComponents/MemberInfo';
import LookbookMain from 'components/lookbookComponents/LookbookMain';
import Others from 'components/lookbookComponents/Others';

const LookbookPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* HEADER */}
      <Navigation />
      {/* 멤버 소개 */}
      <MemberInfo />
      {/* 룩북 메인 */}
      <LookbookMain />
      {/* 다른 멤버 확인하기 */}
      <Others />
      {/* footer */}
      <Footer />
    </>
  );
};

export default LookbookPage;
