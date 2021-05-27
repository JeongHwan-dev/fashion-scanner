import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Thumbs } from 'swiper';
import 'swiper/swiper-bundle.css';
import 'components/lookbookComponents/css/LookbookMain.css';

SwiperCore.use([Navigation, Pagination, Thumbs]);

const LookbookMain = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const jisooApi = [
    {
      id: '0',
      lookbook_img: '/images/lookbook_jisoo_style0.png',
      Category: '원피스',
      Color: '707073',
      Attributes: ['반팔', '하프넥', '스트라이프패턴'],
    },
    {
      id: '1',
      lookbook_img: '/images/lookbook_jisoo_style1.png',
      Category: '반팔 티셔츠',
      Color: 'bc323c',
      Attributes: ['반팔', '크롭', '무지티'],
    },
    {
      id: '2',
      lookbook_img: '/images/lookbook_jisoo_style2.png',
      Category: '정장자켓',
      Color: '575c5f',
      Attributes: ['긴팔', '회색', '잔무늬'],
    },
    {
      id: '3',
      lookbook_img: '/images/lookbook_jisoo_style3.png',
      Category: '반팔 티셔츠',
      Color: 'f8f9ef',
      Attributes: ['반팔', '무지티', '라운드넥'],
    },
    {
      id: '4',
      lookbook_img: '/images/lookbook_jisoo_style4.png',
      Category: '가디건',
      Color: 'eec090',
      Attributes: ['긴팔', '패턴 없음', '카라 있음'],
    },
    {
      id: '5',
      lookbook_img: '/images/lookbook_jisoo_style5.png',
      Category: '셔츠',
      Color: '3070a2',
      Attributes: ['긴팔', '패턴 없음', '청셔츠'],
    },
    {
      id: '6',
      lookbook_img: '/images/lookbook_jisoo_style6.png',
      Category: '원피스',
      Color: 'cd3842',
      Attributes: ['긴팔', '오프 숄더', '홀터넥'],
    },
    {
      id: '7',
      lookbook_img: '/images/lookbook_jisoo_style7.png',
      Category: '원피스',
      Color: 'eec86f',
      Attributes: ['반팔', '스퀘어넥', '허리장식 있음'],
    },
    {
      id: '8',
      lookbook_img: '/images/lookbook_jisoo_style8.png',
      Category: '원피스',
      Color: '337062',
      Attributes: ['긴팔', '니트원피스', '뷔스티에 형식'],
    },
    {
      id: '9',
      lookbook_img: '/images/lookbook_jisoo_style9.png',
      Category: '청자켓',
      Color: '616b81',
      Attributes: ['긴팔', '연청', '숏자켓'],
    },
  ];

  const slides = jisooApi.map(({ id, lookbook_img, Category, Color, Attributes }) => {
    let features = `${Attributes[0]}, ${Attributes[1]}, ${Attributes[2]}`;
    let colorbox = `#${Color}`;

    return (
      <SwiperSlide key={id}>
        <div className="lookbookmain__swiper1">
          <div className="lookbookmain__img">
            <img src={lookbook_img} alt="lookbook" />
          </div>
          <div className="lookbookmain__bgbox"></div>
          <div className="lookbookmain__infobox">
            <div className="lookbookmain__infoinner">
              <div className="lookbookmain__infotxtwrapper">
                <div className="lookbookmain__infotitle">
                  <h3>TYPE</h3>
                  <h3>COLOR</h3>
                  <h3>FEATURES</h3>
                </div>
                <div className="lookbookmain__infocontent">
                  <span>{Category}</span>
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
                    <span>{Color}</span>
                  </div>
                  <span>{features}</span>
                </div>
              </div>
              <div className="lookbookmain__recomm">
                <div className="lookbookmain__recomminner">
                  {/* 추천 이미지, 링크 들어오면 맵 돌려서 넣기. */}
                  <div className="lookbookmain__recommimg">
                    <a target="_blank" href="https://www.google.com">
                      <div className="lookbookmain__gotomall">
                        <span>링크로 이동하기</span>
                      </div>
                      <img src="/images/lookbook_jisoo_style9.png" alt="recommend image1" />
                    </a>
                  </div>
                  <div className="lookbookmain__recommimg">
                    <a target="_blank" href="https://www.google.com">
                      <div className="lookbookmain__gotomall">
                        <span>링크로 이동하기</span>
                      </div>
                      <img src="/images/lookbook_jisoo_style9.png" alt="recommend image1" />
                    </a>
                  </div>
                  <div className="lookbookmain__recommimg">
                    <a target="_blank" href="https://www.google.com">
                      <div className="lookbookmain__gotomall">
                        <span>링크로 이동하기</span>
                      </div>
                      <img src="/images/lookbook_jisoo_style9.png" alt="recommend image1" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
    );
  });

  const thumbnails = jisooApi.map(({ id, lookbook_img }) => {
    return (
      <SwiperSlide key={id}>
        <div className="lookbookmain__swiper2">
          <img src={lookbook_img} alt="thumbnail" />
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
            initialSlide={0}
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