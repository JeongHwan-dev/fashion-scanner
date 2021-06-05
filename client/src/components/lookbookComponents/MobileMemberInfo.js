import React from 'react';
import 'components/lookbookComponents/css/MobileMemberInfo.css';

const MobileMemberInfo = ({ memberId, memberColor }) => {
  // jennie:1, rose:2, jisoo:3, lisa:4
  const symbolColor = `#${memberColor}`;
  // console.log(memberId, memberColor); // 1, 101010
  // console.log(symbolColor); // #101010
  const symbolBox = {
    position: 'absolute',
    top: '90px',
    left: '90px',
    width: '200px',
    height: '200px',
    backgroundColor: `${symbolColor}`,
    borderRadius: '50%',
    zIndex: '1',
    filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
  };

  return (
    <>
      <section className="m-memberInfo">
        <div className="m-memberInfo__inner">
          <div className="m-memberInfo__member">
            <div className="m-memberInfo__member__img">
              {memberId === 1 && (
                <img
                  src="/images/lookbooks/lookbook_jennie_main.png"
                  style={{ display: 'inline-block', width: '168px', height: '168px' }}
                  alt="JENNIE"
                />
              )}
              {memberId === 2 && <img src="/images/lookbooks/lookbook_rose_main.png" alt="ROSE" />}
              {memberId === 3 && (
                <img
                  src="/images/lookbooks/mobile_lookbook_jisoo_main.png"
                  style={{ display: 'inline-block', width: '156px', height: '156px' }}
                  alt="JISOO"
                />
              )}
              {memberId === 4 && (
                <img
                  src="/images/lookbooks/lookbook_lisa_main.png"
                  style={{ display: 'inline-block', width: '152px', height: '152px' }}
                  alt="LISA"
                />
              )}
            </div>
            <div className="m-memberInfo__member__bg" style={symbolBox}></div>
          </div>
          <div className="m-memberInfo__dsc">
            <h2>
              {memberId === 1 && 'JENNIE'}
              {memberId === 2 && 'ROSE'}
              {memberId === 3 && 'JISOO'}
              {memberId === 4 && 'LISA'}
            </h2>
          </div>
          <div className="m-memberInfo__inner__bg"></div>
        </div>
      </section>
    </>
  );
};

export default MobileMemberInfo;
