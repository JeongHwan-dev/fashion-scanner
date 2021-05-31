import React, { useEffect, useState } from 'react';
import Navigation from 'components/commonComponents/Navigation';
import Footer from 'components/commonComponents/Footer';
import MemberInfo from 'components/lookbookComponents/MemberInfo';
import LookbookMain from 'components/lookbookComponents/LookbookMain';
import Others from 'components/lookbookComponents/Others';
import axios from 'axios';

const LookbookRose = () => {
  const memberId = 2;
  // jennie:1, rose:2, jisoo:3, lisa:4
  const lookbookApi = `http://elice-kdt-ai-track-vm-ai-13.koreacentral.cloudapp.azure.com:8000/api/members/2/lookbook`;
  const [member, setMemeber] = useState([]);
  const [memberColor, setMemberColor] = useState('');

  useEffect(() => {
    const getLookbookData = async () => {
      await axios.get(lookbookApi)
        .then(response => {
          // console.log(response);
          setMemeber(response.data.lookbookData);
          setMemberColor(response.data.symbolColor);
        })
    }
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

export default LookbookRose;
