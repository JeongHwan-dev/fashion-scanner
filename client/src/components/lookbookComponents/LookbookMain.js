import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Thumbs } from 'swiper';
import 'swiper/swiper-bundle.css';
import 'components/lookbookComponents/css/LookbookMain.css';

SwiperCore.use([Navigation, Pagination, Thumbs]);

const LookbookMain = ({ member, memberColor }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const symbolColor = `#${memberColor}`;
  // console.log(member);
  const slides = member.map(
    ({ lookbookId, lookbookImage, category, color, attributes, similarImages }) => {
      let features = `${attributes[0]}, ${attributes[1]}, ${attributes[2]}`;
      let colorbox = `#${color}`;
      let similars = JSON.parse(similarImages);
      // console.log(lookbookImage);
      return (
        <SwiperSlide key={lookbookId}>
          <div className="lookbookmain__swiper1">
            <div className="lookbookmain__img">
              <img src={lookbookImage} alt="lookbook" />
            </div>
            <div
              className="lookbookmain__bgbox"
              style={{
                position: 'absolute',
                width: '300px',
                height: '300px',
                backgroundColor: `${symbolColor}`,
                top: '40px',
                left: '400px',
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
                      {/* <span>{color}</span> */}
                    </div>
                    <span>{features}</span>
                  </div>
                </div>
                <div className="lookbookmain__recomm">
                  <div className="lookbookmain__recomminner">
                    {similars.map((similar) => {
                      // console.log(similar.image);
                      // console.log(similar.link);
                      return (
                        <div className="lookbookmain__recommimg">
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

  const thumbnails = member.map(({ lookbookId, lookbookImage }) => {
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
            pagination
            spaceBetween={0}
            slidesPerView={1}
            thumbs={{ swiper: thumbsSwiper }}
            loop={true}
          >
            {slides}
          </Swiper>
          <Swiper
            id="thumbs"
            className="lookbookmain__thumbswiper"
            onSwiper={setThumbsSwiper}
            spaceBetween={20}
            slidesPerView={10}
          >
            {thumbnails}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default LookbookMain;
