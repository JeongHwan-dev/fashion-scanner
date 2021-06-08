import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navigation from 'components/commonComponents/Navigation';
import Footer from 'components/commonComponents/Footer';
import MemberInfo from 'components/lookbookComponents/MemberInfo';
import LookbookMain from 'components/lookbookComponents/LookbookMain';
import Others from 'components/lookbookComponents/Others';
import { useMediaQuery } from 'react-responsive';
import MobileMemberInfo from 'components/lookbookComponents/MobileMemberInfo';
import MobileLookbookMain from 'components/lookbookComponents/MobileLookbookMain';
import MobileOthers from 'components/lookbookComponents/MobileOthers';

const LookbookLisa = () => {
  // jennie:1, rose:2, jisoo:3, lisa:4
  const memberId = 4;
  const testUrl =
    'https://544e9fbe-33cf-4453-9271-9c0992dcef4a.mock.pstmn.io/api/members/1/lookbook';
  const [member, setMemeber] = useState([]);
  const [memberEn, setMemberEn] = useState([]);
  const [memberColor, setMemberColor] = useState('');
  const isMobile = useMediaQuery({ maxWidth: 375 });

  useEffect(() => {
    const getLookbookData = async () => {
      await axios
        .get(testUrl)
        // 응답(성공)
        .then((response) => {
          setMemberEn(response.data.lookbookDataEn);
          setMemeber(response.data.lookbookDataKo);
          setMemberColor(response.data.symbolColor);
        })
        // 응답(실패)
        .catch((error) => {
          console.log(error);
        });
    };
    getLookbookData();
  }, []);

  return (
    <>
      {/* HEADER */}
      <Navigation />
      {/* 멤버 소개 */}
      {!isMobile ? (
        <MemberInfo memberId={memberId} />
      ) : (
        <MobileMemberInfo memberId={memberId} memberColor={memberColor} />
      )}
      {/* 룩북 메인 */}
      {!isMobile ? (
        <LookbookMain member={member} memberEn={memberEn} memberColor={memberColor} />
      ) : (
        <MobileLookbookMain member={member} memberEn={memberEn} />
      )}
      {/* 다른 멤버 확인하기 */}
      {!isMobile ? <Others /> : <MobileOthers />}
      {/* footer */}
      <Footer />
    </>
  );
};

export default LookbookLisa;
