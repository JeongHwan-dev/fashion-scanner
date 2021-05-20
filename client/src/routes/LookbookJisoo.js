import React from 'react';
import jisooMain from '../images/lookbook_jisoo_main.png';
import jisooStyle01 from '../images/lookbook_jisoo_style01.png';
import jisooStyle02 from '../images/lookbook_jisoo_style02.png';
import jisooStyle03 from '../images/lookbook_jisoo_style03.png';
import memberRose from '../images/lookbook_members_rose.png';
import memberJisoo from '../images/lookbook_members_jisoo.png';
import memberJennie from '../images/lookbook_members_jennie.png';
import memberLisa from '../images/lookbook_members_lisa.png';
import recomm01 from '../images/lookbook_recomm01.jpeg';
import recomm02 from '../images/lookbook_recomm02.jpeg';
import recomm03 from '../images/lookbook_recomm03.jpeg';
import arrow from '../images/lookbook_arrow.png';

const Lookbook = () => {
  const mainWrap = {
    display: 'flex',
    height: '100%',
    justifyContent: 'spaceBetween',
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

  const backgroundBox = {
    width: '560px',
    height: '470px',
    backgroundColor: '#19181E',
    position: 'relative',
    top: '70px',
    left: '400px',
  };

  const styleBox = {
    position: 'relative',
    top: '-350px',
    left: '150px',
  }

  const infoBox = {
    width: '600px',
    height: '600px',
    backgroundColor: '#E4E4E4',
    position: 'relative',
    top: '-800px',
    left: '700px'
  }

  const infoTitle = {
    color: '#5F5F5F',
    fontSize: '20px',
    lineHeight: '150%',
    fontWeight: 'bold'
  }

  const infoContent = {
    color: '#7E7E7E',
    fontSize: '16px',
    lineHeight: '150%'
  }

  const recommImage = {
    width: '180px',
    height: 'auto',
    display: 'inline',
    verticalAlign: 'top',
    margin: '5px'
  }

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
          <div className="main_member_img" style={memberImg}>
            <img src={jisooMain} />
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
      <section className="lookbook_main" style={{ backgroundColor: 'white' }}>
        <div className="lookbook_bg">
          <div className="behind_box" style={backgroundBox}></div>
          <div className="stylebox" style={styleBox}>
            <img src={jisooStyle01} style={{ width: '500px' }} />
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
            <div className="recomm" style={{ textAlign: "center" }}>
              <img src={recomm01} style={recommImage} />
              <img src={recomm02} style={recommImage} />
              <img src={recomm03} style={recommImage} />
            </div>
          </div>
        </div>
        <p>1 of 10</p>
        <div className="styles">
          <img src={jisooStyle02} />
          <img src={jisooStyle03} />
          <img src={jisooStyle02} />
          <img src={jisooStyle03} />
          <img src={jisooStyle02} />
        </div>
      </section>
      {/* 다른 멤버 확인하기 */}
      <section>
        <h2>다른 멤버 확인하기</h2>
        <div className="members">
          <img src={memberRose} />
          <img src={memberJisoo} />
          <img src={memberJennie} />
          <img src={memberLisa} />
        </div>
      </section>
      {/* footer */}
      <footer>
        <div className="inner"></div>
      </footer>
    </>
  );
};

export default Lookbook;
