import React, { useRef } from 'react';
import useOnScreen from 'hooks/useOnScreen';
import 'components/lookbookComponents/css/Others.css';

const Others = () => {
  const imageRef = useRef(null);
  const isVisible = useOnScreen(imageRef);

  return (
    <>
      <section className="others">
        <div className="others__inner">
          <div className="others__title">
            <h2>CHECK OUT THE OTHER MEMBERS</h2>
          </div>
          <div className="others__img" ref={imageRef}>
            <div className="img__line1">
              <a href="/lookbook/jisoo">
                <img
                  className={`img1 ${isVisible ? 'scroll' : ''}`}
                  src="/images/lookbooks/lookbook_members_jisoo.png"
                  alt="JISOO"
                />
              </a>
              <a href="/lookbook/lisa">
                <img
                  className={`img2 ${isVisible ? 'scroll' : ''}`}
                  src="/images/lookbooks/lookbook_members_lisa.png"
                  alt="LISA"
                />
              </a>
            </div>
            <div className="img__line2">
              <a href="/lookbook/jennie">
                <img
                  className={`img3 ${isVisible ? 'scroll' : ''}`}
                  src="/images/lookbooks/lookbook_members_jennie.png"
                  alt="JENNIE"
                />
              </a>
              <a href="/lookbook/rose">
                <img
                  className={`img4 ${isVisible ? 'scroll' : ''}`}
                  src="/images/lookbooks/lookbook_members_rose.png"
                  alt="ROSE"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Others;
