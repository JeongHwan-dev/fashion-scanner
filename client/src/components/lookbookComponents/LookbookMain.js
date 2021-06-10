import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Thumbs } from 'swiper';
import 'components/lookbookComponents/css/LookbookMain.css';
import 'swiper/swiper-bundle.css';

SwiperCore.use([Navigation, Thumbs]);

const LookbookMain = ({ member, memberEn, memberColor }) => {
  const { t } = useTranslation('');
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const symbolColor = `#${memberColor}`;

  const slidesKo = member.map(
    ({ lookbookId, lookbookImage, category, color, attributes, similarImages }) => {
      let features = `${attributes[0]}, ${attributes[1]}, ${attributes[2]}`;
      let colorbox = `#${color}`;
      let similars = JSON.parse(similarImages);
      let similarList = [];
      for (let similar of similars) {
        similarList.push(JSON.parse(similar));
      }

      return (
        <SwiperSlide key={lookbookId}>
          <div className="lookbookmain__swiper1" key={lookbookId}>
            <div className="lookbookmain__img">
              <img src={lookbookImage} alt="lookbook" />
            </div>
            <div
              className="lookbookmain__bgbox"
              style={{
                backgroundColor: `${symbolColor}`,
              }}
            ></div>
            <div className="lookbookmain__infobox">
              <div className="lookbookmain__infoinner">
                <div className="lookbookmain__infotxtwrapper">
                  <div className="lookbookmain__infotitle">
                    <h3>TYPE</h3>
                    <h3>COLOR</h3>
                    <h3>FEATURES</h3>
                  </div>
                  <div className="lookbookmain__infocontent">
                    <span>{category}</span>
                    <div className="lookbookmain__colorcontent">
                      <div
                        className="lookbookmain__colorbox"
                        style={{
                          display: 'inline-block',
                          width: '12px',
                          height: '12px',
                          backgroundColor: `${colorbox}`,
                          marginRight: '5px',
                        }}
                      ></div>
                    </div>
                    <span>{features}</span>
                  </div>
                </div>
                <div className="lookbookmain__recomm">
                  <div className="lookbookmain__recomminner">
                    {similarList.map((similar, idx) => {
                      return (
                        <div className="lookbookmain__recommimg" key={idx}>
                          <a target="_blank" href={similar.link}>
                            <div className="lookbookmain__gotomall">
                              <span>링크로 이동하기</span>
                            </div>
                            <img src={similar.image} alt="recommend image" />
                          </a>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      );
    },
  );

  const slidesEn = memberEn.map(
    ({ lookbookId, lookbookImage, category, color, attributes, similarImages }) => {
      let features = `${attributes[0]}, ${attributes[1]}, ${attributes[2]}`;
      let colorbox = `#${color}`;
      let similars = JSON.parse(similarImages);
      let similarList = [];
      for (let similar of similars) {
        similarList.push(JSON.parse(similar));
      }

      return (
        <SwiperSlide key={lookbookId}>
          <div className="lookbookmain__swiper1" key={lookbookId}>
            <div className="lookbookmain__img">
              <img src={lookbookImage} alt="lookbook" />
            </div>
            <div
              className="lookbookmain__bgbox"
              style={{
                backgroundColor: `${symbolColor}`,
              }}
            ></div>
            <div className="lookbookmain__infobox">
              <div className="lookbookmain__infoinner">
                <div className="lookbookmain__infotxtwrapper">
                  <div className="lookbookmain__infotitle">
                    <h3>TYPE</h3>
                    <h3>COLOR</h3>
                    <h3>FEATURES</h3>
                  </div>
                  <div className="lookbookmain__infocontent">
                    <span>{category}</span>
                    <div className="lookbookmain__colorcontent">
                      <div
                        className="lookbookmain__colorbox"
                        style={{
                          display: 'inline-block',
                          width: '12px',
                          height: '12px',
                          backgroundColor: `${colorbox}`,
                          marginRight: '5px',
                        }}
                      ></div>
                    </div>
                    <span>{features}</span>
                  </div>
                </div>
                <div className="lookbookmain__recomm">
                  <div className="lookbookmain__recomminner">
                    {similarList.map((similar, idx) => {
                      return (
                        <div className="lookbookmain__recommimg" key={idx}>
                          <a target="_blank" href={similar.link}>
                            <div className="lookbookmain__gotomall">
                              <span>go to the mall</span>
                            </div>
                            <img src={similar.image} alt="recommend image" />
                          </a>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      );
    },
  );

  const thumbnailsKo = member.map(({ lookbookId, lookbookImage }) => {
    return (
      <SwiperSlide key={lookbookId}>
        <div className="lookbookmain__swiper2">
          <img src={lookbookImage} alt="thumbnail" />
        </div>
      </SwiperSlide>
    );
  });

  const thumbnailsEn = memberEn.map(({ lookbookId, lookbookImage }) => {
    return (
      <SwiperSlide key={lookbookId}>
        <div className="lookbookmain__swiper2">
          <img src={lookbookImage} alt="thumbnail" />
        </div>
      </SwiperSlide>
    );
  });

  return (
    <>
      <section className="lookbookmain">
        <div className="lookbookmain__inner">
          <Swiper
            id="main"
            className="lookbookmain__mainswiper"
            navigation
            spaceBetween={0}
            slidesPerView={1}
            thumbs={{ swiper: thumbsSwiper }}
            loop={true}
          >
            {localStorage.i18nextLng === 'en' ? slidesEn : slidesKo}
          </Swiper>
          <Swiper
            id="thumbs"
            className="lookbookmain__thumbswiper"
            onSwiper={setThumbsSwiper}
            spaceBetween={20}
            slidesPerView={10}
          >
            {localStorage.i18nextLng === 'en' ? thumbnailsEn : thumbnailsKo}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default LookbookMain;
