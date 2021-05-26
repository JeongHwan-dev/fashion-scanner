import React from 'react';
// import axios from 'axios';
import Navigation from 'components/commonComponents/Navigation';
import Footer from 'components/commonComponents/Footer';
import MemberInfo from 'components/lookbookComponents/MemberInfo';
import LookbookMain from 'components/lookbookComponents/LookbookMain';
import Others from 'components/lookbookComponents/Others';


const LookbookJisoo = () => {

  // axios.get('https://virtserver.swaggerhub.com/bky373/fashion-scanner-apis/v1/member/1')
  //   .then(response => {
  //     console.log(response.data)
  //   })

  // imageRef.current.src = 
  // typeRef.current.innerHTML =  Category
  // colorRef.current.innerHTML = Color
  // featruesRef.current.innerHTML = Attributes
  // countRef.current.innerHTML = `${id} of 10`;

  return (
    <>
      {/* HEADER */}
      <Navigation />
      {/* 멤버 소개 */}
      <MemberInfo />
      {/* 룩북 메인 */}
      {/* <LookbookMain /> */}
      {/* 다른 멤버 확인하기 */}
      <Others />
      {/* footer */}
      <Footer />
    </>
  );
};

export default LookbookJisoo;
