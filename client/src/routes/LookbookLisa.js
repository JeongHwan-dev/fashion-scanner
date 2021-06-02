import React, { useEffect, useState } from 'react';
import Navigation from 'components/commonComponents/Navigation';
import Footer from 'components/commonComponents/Footer';
import MemberInfo from 'components/lookbookComponents/MemberInfo';
import LookbookMain from 'components/lookbookComponents/LookbookMain';
import Others from 'components/lookbookComponents/Others';
import axios from 'axios';

const LookbookLisa = () => {
  // jennie:1, rose:2, jisoo:3, lisa:4
  const memberId = 4;
  const [member, setMemeber] = useState([]);
  const [memberColor, setMemberColor] = useState('');

  useEffect(() => {
    const getLookbookData = async () => {
      await axios.get(`/api/members/${memberId}/lookbook`)
      // 응답(성공)
      .then((response) => {
        setMemeber(response.data.lookbookData);
        setMemberColor(response.data.symbolColor);
      })
      // 응답(실패)
      .catch((error) => {
        console.log(error);
      })
    };
    getLookbookData();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* HEADER */}
      <Navigation />
      {/* 멤버 소개 */}
      <MemberInfo memberId={memberId} />
      {/* 룩북 메인 */}
      <LookbookMain member={member} memberColor={memberColor} />
      {/* 다른 멤버 확인하기 */}
      <Others />
      {/* footer */}
      <Footer />
    </>
  );
};

export default LookbookLisa;
