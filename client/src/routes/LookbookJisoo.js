import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import axios from 'axios';
import Navigation from 'components/commonComponents/Navigation';
import MemberInfo from 'components/lookbookComponents/MemberInfo';
import MobileMemberInfo from 'components/lookbookComponents/MobileMemberInfo';
import LookbookMain from 'components/lookbookComponents/LookbookMain';
import MobileLookbookMain from 'components/lookbookComponents/MobileLookbookMain';
import Others from 'components/lookbookComponents/Others';
import MobileOthers from 'components/lookbookComponents/MobileOthers';
import Footer from 'components/commonComponents/Footer';

const LookbookJisoo = () => {
  // jennie: 1, rose: 2, jisoo: 3, lisa: 4
  const memberId = 3;
  const testUrl =
    `http://elice-kdt-ai-track-vm-distribute-13.koreacentral.cloudapp.azure.com:8001/api/members/${memberId}/lookbook`;
  const [member, setMemeber] = useState([]);
  const [memberEn, setMemberEn] = useState([]);
  const [memberColor, setMemberColor] = useState('');
  const isMobile = useMediaQuery({ maxWidth: 390 });

  useEffect(() => {
    const getLookbookData = async () => {
      await axios
        .get(`/api/members/${memberId}/lookbook`)
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
      <Navigation />
      {/* 01 : MEMBER INFORMATION */}
      {!isMobile ? (
        <MemberInfo memberId={memberId} />
      ) : (
        <MobileMemberInfo memberId={memberId} memberColor={memberColor} />
      )}
      {/* 02 : LOOKBOOK MAIN */}
      {!isMobile ? (
        <LookbookMain member={member} memberEn={memberEn} memberColor={memberColor} />
      ) : (
        <MobileLookbookMain member={member} memberEn={memberEn} />
      )}
      {/* 03 : OTHER MEMBERS CHECK */}
      {!isMobile ? <Others /> : <MobileOthers />}
      <Footer />
    </>
  );
};

export default LookbookJisoo;
