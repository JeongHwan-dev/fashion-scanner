import React, { useState } from 'react';
import jisooMain from '../images/lookbook_jisoo_main.png';
// import jisooStyle1 from '../images/lookbook_jisoo_style1.png';
// import jisooStyle2 from '../images/lookbook_jisoo_style2.png';
// import jisooStyle3 from '../images/lookbook_jisoo_style3.png';
// import jisooStyle4 from '../images/lookbook_jisoo_style4.jpeg';
// import jisooStyle5 from '../images/lookbook_jisoo_style5.jpeg';
// import jisooStyle6 from '../images/lookbook_jisoo_style6.png';
// import jisooStyle7 from '../images/lookbook_jisoo_style7.png';
// import jisooStyle8 from '../images/lookbook_jisoo_style8.jpeg';
// import jisooStyle9 from '../images/lookbook_jisoo_style9.jpeg';
// import jisooStyle10 from '../images/lookbook_jisoo_style10.jpeg';
import memberRose from '../images/lookbook_members_rose.png';
import memberJisoo from '../images/lookbook_members_jisoo.png';
import memberJennie from '../images/lookbook_members_jennie.png';
import memberLisa from '../images/lookbook_members_lisa.png';
import recomm01 from '../images/lookbook_recomm01.jpeg';
import recomm02 from '../images/lookbook_recomm02.jpeg';
import recomm03 from '../images/lookbook_recomm03.jpeg';
import arrow from '../images/lookbook_arrow.png';
import { Link } from 'react-router-dom';

const LookbookTest = () => {
  // css
  const mainWrap = {
    display: 'flex',
    height: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const memberImg = {
    width: '395px',
    padding: '0 50px',
  };

  const memberName = {
    fontSize: '48px',
    color: '#FBBCBC',
    padding: '0 50px',
  };

  const lookbookMain = {
    backgroundColor: 'white',
    height: '1200px',
  };

  const backgroundBox = {
    width: '560px',
    height: '470px',
    backgroundColor: '#19181E',
    position: 'absolute',
    top: '500px',
    left: '400px',
  };

  const styleBox = {
    position: 'absolute',
    top: '600px',
    left: '150px',
    display: 'inline-block',
  };

  const infoBox = {
    width: '600px',
    height: '600px',
    backgroundColor: '#E4E4E4',
    position: 'absolute',
    top: '700px',
    left: '700px',
  };

  const infoTitle = {
    color: '#5F5F5F',
    fontSize: '20px',
    lineHeight: '150%',
    fontWeight: 'bold',
  };

  const infoContent = {
    color: '#7E7E7E',
    fontSize: '16px',
    lineHeight: '150%',
  };

  const recommImage = {
    width: '180px',
    height: '270px',
    display: 'inline',
    verticalAlign: 'top',
    margin: '5px',
    objectFit: 'cover',
  };

  const arrows = {
    position: 'relative',
    top: '500px',
    justifyContent: 'space-between',
    display: 'flex',
  };

  const leftArrow = {
    width: '50px',
    transform: 'rotate(180deg)',
    position: 'relative',
    marginLeft: '40px',
  };

  const rightArrow = {
    width: '50px',
    position: 'relative',
    marginRight: '40px',
    zIndex: '1',
  };

  const numberingWrap = {
    position: 'absolute',
    top: '1350px',
    left: '47%'
  };

  const numbering = {
    display: 'block',
    textAlign: 'center',
    color: '#666666',
  };

  const styles = {
    display: 'flex',
    justifyContent: 'center',
    position: 'relative',
    top: '900px',
  };

  const style = {
    width: '100px',
    height: '100px',
    display: 'inline-block',
    verticalAlign: 'top',
    margin: '5px',
    objectFit: 'cover',
  };

  const othersTitle = {
    lineHeight: '80px',
    display: 'inline-block',
    fontSize: '64px',
    marginTop: '200px',
  };

  const otherMember = {
    display: 'inline-block',
    width: '250px',
    height: '568px',
    verticalAlign: 'top',
    filter: 'grayscale(1)',
  };

  const otherWrap = {
    display: 'flex',
    justifyContent: 'space-evenly',
    margin: '50px',
  };

  const [lookbookNum, setLookbookNum] = useState(1);

  // 오른쪽 버튼 클릭
  function clickRightArrow() {
    if (lookbookNum < 10) {
      setLookbookNum(lookbookNum + 1);
    } else {
      setLookbookNum(1);
    }
  }

  // 왼쪽 버튼 클릭
  function clickLeftArrow() {
    if (lookbookNum === 1) {
      setLookbookNum(10);
    } else {
      setLookbookNum(lookbookNum - 1);
    }
  }

  // 지정한 필터 없애기
  function removeFilter(e) {
    e.target.style.filter = 'none';
  }

  // 다른멤버 확인하기 섹션의 멤버들 이미지 흑백으로 설정하기
  function changeMemberToGrayscale(e) {
    e.target.style.filter = 'grayscale(1)';
  }

  // function goToMall(e) {
  //   e.target.style.filter = 'opacity(0.5)';
  // }
  
  // api 만들어보기
  const jisooApi = [
    {
      id: '1',
      lookbook_img: '/images/lookbook_jisoo_style1.png',
      Category: '원피스',
      Color: '#707073',
      Attribute1: '반팔',
      Attribute2: '하프넥',
      Attribute3: '스트라이프 패턴',
    },
    {
      id: '2',
      lookbook_img: '/images/lookbook_jisoo_style2.png',
      Category: '반팔 티셔츠',
      Color: '#bc323c',
      Attribute1: '반팔',
      Attribute2: '크롭',
      Attribute3: '무지티',
    },
    {
      id: '3',
      lookbook_img: '/images/lookbook_jisoo_style3.png',
      Category: '정장자켓',
      Color: '#575c5f',
      Attribute1: '긴팔',
      Attribute2: '회색',
      Attribute3: '잔무늬',
    },
    {
      id: '4',
      lookbook_img: '/images/lookbook_jisoo_style4.png',
      Category: '반팔 티셔츠',
      Color: '#f8f9ef',
      Attribute1: '반팔',
      Attribute2: '무지티',
      Attribute3: '라운드넥',
    },
    {
      id: '5',
      lookbook_img: '/images/lookbook_jisoo_style5.png',
      Category: '가디건',
      Color: '#eec090',
      Attribute1: '긴팔',
      Attribute2: '패턴 없음',
      Attribute3: '카라 있음',
    },
    {
      id: '6',
      lookbook_img: '/images/lookbook_jisoo_style6.png',
      Category: '셔츠',
      Color: '#3070a2',
      Attribute1: '긴팔',
      Attribute2: '패턴 없음',
      Attribute3: '청색 셔츠',
    },
    {
      id: '7',
      lookbook_img: '/images/lookbook_jisoo_style7.png',
      Category: '원피스',
      Color: '#cd3842',
      Attribute1: '긴팔',
      Attribute2: '오프 숄더',
      Attribute3: '홀터넥',
    },
    {
      id: '8',
      lookbook_img: '/images/lookbook_jisoo_style8.png',
      Category: '원피스',
      Color: '#eec86f',
      Attribute1: '반팔',
      Attribute2: '스퀘어넥',
      Attribute3: '허리장식 있음',
    },
    {
      id: '9',
      lookbook_img: '/images/lookbook_jisoo_style9.png',
      Category: '원피스',
      Color: '#337062',
      Attribute1: '긴팔',
      Attribute2: '니트원피스',
      Attribute3: '뷔스티에 형식',
    },
    {
      id: '10',
      lookbook_img: '/images/lookbook_jisoo_style10.png',
      Category: '청자켓',
      Color: '#616b81',
      Attribute1: '긴팔',
      Attribute2: '연청',
      Attribute3: '숏자켓',
    },
  ];

  let lookbookMainImg = `/images/lookbook_jisoo_style${lookbookNum}.png`;


  return (
    <>
      {/* HEADER */}
      <header>
        <nav className="inner">
          <a href="/" className="logo">
            <img src={require('images/fs_logo.png').default} alt="FASHION SCANNER" />
          </a>
          <div className="link-group">
            <ul className="link">
              <li>
                <a href="/">서비스 소개</a>
              </li>
              <li>
                <a href="/">룩북</a>
              </li>
              <li>
                <a href="/">당신의 패션은 어떤 멤버?</a>
              </li>
              <li>
                <a href="/">요청하기</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      {/* 멤버 소개 */}
      <section>
        <div className="main_wrap" style={mainWrap}>
          <div className="main_member_img" style={memberImg} alt="member">
            <img src={jisooMain} alt="member" />
          </div>
          <div className="main_txt_wrap" style={{ width: 'calc(100% - 500px)' }}>
            <h1 style={memberName}>JISOO</h1>
            <p style={{ padding: '0 50px' }}>
              아니한 심장은 위하여서 타오르고 그들의 황금시대를 것이다. 열락의 충분히 착목한는 가는
              것은 위하여서. 따뜻한 우는 능히 별과 충분히 이상이 시들어 오직 있는가? 얼음 안고,
              평화스러운 사람은 우리는 같이, 품고 온갖 있다. 것이 우리 웅대한 착목한는 것이다. 너의
              있는 불어 운다. 같지 착목한는 없으면 투명하되 남는 피가 스며들어 힘있다. 그들의 것이
              바로 이상, 대고, 것이다.보라, 힘있다. 얼마나 피어나는 온갖 우는 사막이다. 심장의
              위하여 구하기 놀이 봄바람을 위하여 고행을 때문이다. 싶이 소담스러운 지혜는 것이다.
            </p>
          </div>
        </div>
      </section>
      {/* 룩북 메인 */}
      <section className="lookbook_main" style={lookbookMain}>
        <div className="lookbook_bg">
          <div className="arrows" style={arrows}>
            <button
              type="button"
              style={{ backgroundColor: 'white', border: '0', cursor: 'pointer' }}
              onClick={clickLeftArrow}
            >
              <img src={arrow} style={leftArrow} alt="left_arrow" />
            </button>
            <button
              type="button"
              style={{ backgroundColor: 'white', border: '0', cursor: 'pointer' }}
              onClick={clickRightArrow}
            >
              <img src={arrow} style={rightArrow} alt="right_arrow" />
            </button>
          </div>

          <div className="lookbook_slide">
            <div className="numbering_wrap" style={numberingWrap}>
              <p style={numbering}>{lookbookNum} of 10</p>
            </div>
            <div className="behind_box" style={backgroundBox}></div>

            <div>
              <div className="stylebox" style={styleBox}>
                {/* <img src={jisooStyle10} style={{ width: '500px' }} alt="lookbook" /> */}
                <img src={lookbookMainImg} style={{ width: '500px' }} alt="lookbook" />
              </div>
              <div className="styleinfo" style={infoBox}>
                <div className="style_txt_wrap" style={{ padding: '50px 0 40px 30px' }}>
                  <h6 style={infoTitle}>TYPE</h6>
                  <p style={infoContent}>원피스</p>
                  <h6 style={infoTitle}>COLOR</h6>
                  <p style={infoContent}>19181E</p>
                  <h6 style={infoTitle}>FEATURES</h6>
                  <p style={infoContent}>반팔, 하프넥, 스트라이프 패턴</p>
                </div>
                <div className="recomm" style={{ textAlign: 'center' }}>
                  <img src={recomm01} style={recommImage} alt="recommended_style" />
                  <img src={recomm02} style={recommImage} alt="recommended_style" />
                  <img src={recomm03} style={recommImage} alt="recommended_style" />
                </div>
              </div>
            </div>
            {/* {jisooApi.map(({ id, lookbook_img, Category, Color, Attribute1, Attribute2, Attribute3 }) => {
              return (
                <>
                  <p style={{ color: 'black' }}>{id}, {lookbook_img}, {Category}, {Color}, {Attribute1}, {Attribute2}, {Attribute3}</p>
                </>
              )
            })} */}
            
          </div>
        </div>

        <ul style={styles}>
          {jisooApi.map(({ id, lookbook_img }) => {
            return (
              <li key={id}>
                <img src={lookbook_img} style={style} alt="lookbook" />
              </li>
            );
          })}
        </ul>
      </section>
      {/* 다른 멤버 확인하기 */}
      <section>
        <div className="others_wrap" style={otherWrap}>
          <p style={othersTitle}>
            다른 멤버 <br /> 확인하기
          </p>
          <div className="members">
            <Link to="/" onMouseOver={removeFilter} onMouseLeave={changeMemberToGrayscale}>
              <img src={memberRose} style={otherMember} alt="other_member" />
            </Link>
            <Link
              to="/jisoolookbook"
              onMouseOver={removeFilter}
              onMouseLeave={changeMemberToGrayscale}
            >
              <img src={memberJisoo} style={otherMember} alt="other_member" />
            </Link>
            <Link to="#" onMouseOver={removeFilter} onMouseLeave={changeMemberToGrayscale}>
              <img src={memberJennie} style={otherMember} alt="other_member" />
            </Link>
            <Link to="#" onMouseOver={removeFilter} onMouseLeave={changeMemberToGrayscale}>
              <img src={memberLisa} style={otherMember} alt="other_member" />
            </Link>
          </div>
        </div>
      </section>
      {/* footer */}
      <footer>
        <div className="inner"></div>
      </footer>
    </>
  );
};

export default LookbookTest;
