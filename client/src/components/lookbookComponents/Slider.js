import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide, Swiperslide } from 'swiper/react';
import SwiperCore from 'swiper';

import 'swiper/swiper-bundle.css';
import zIndex from '@material-ui/core/styles/zIndex';

const Slider = () => {
  const jisooApi = [
    {
      id: '0',
      lookbook_img: '/images/lookbook_jisoo_style0.png',
      Category: '원피스',
      Color: '#707073',
      Attributes: ['반팔', '하프넥', '스트라이프패턴'],
    },
    {
      id: '1',
      lookbook_img: '/images/lookbook_jisoo_style1.png',
      Category: '반팔 티셔츠',
      Color: '#bc323c',
      Attributes: ['반팔', '크롭', '무지티'],
    },
    {
      id: '2',
      lookbook_img: '/images/lookbook_jisoo_style2.png',
      Category: '정장자켓',
      Color: '#575c5f',
      Attributes: ['긴팔', '회색', '잔무늬'],
    },
    {
      id: '3',
      lookbook_img: '/images/lookbook_jisoo_style3.png',
      Category: '반팔 티셔츠',
      Color: '#f8f9ef',
      Attributes: ['반팔', '무지티', '라운드넥'],
    },
    {
      id: '4',
      lookbook_img: '/images/lookbook_jisoo_style4.png',
      Category: '가디건',
      Color: '#eec090',
      Attributes: ['긴팔', '패턴 없음', '카라 있음'],
    },
    {
      id: '5',
      lookbook_img: '/images/lookbook_jisoo_style5.png',
      Category: '셔츠',
      Color: '#3070a2',
      Attributes: ['긴팔', '패턴 없음', '청셔츠'],
    },
    {
      id: '6',
      lookbook_img: '/images/lookbook_jisoo_style6.png',
      Category: '원피스',
      Color: '#cd3842',
      Attributes: ['긴팔', '오프 숄더', '홀터넥'],
    },
    {
      id: '7',
      lookbook_img: '/images/lookbook_jisoo_style7.png',
      Category: '원피스',
      Color: '#eec86f',
      Attributes: ['반팔', '스퀘어넥', '허리장식 있음'],
    },
    {
      id: '8',
      lookbook_img: '/images/lookbook_jisoo_style8.png',
      Category: '원피스',
      Color: '#337062',
      Attributes: ['긴팔', '니트원피스', '뷔스티에 형식'],
    },
    {
      id: '9',
      lookbook_img: '/images/lookbook_jisoo_style9.png',
      Category: '청자켓',
      Color: '#616b81',
      Attributes: ['긴팔', '연청', '숏자켓'],
    },
  ];

  const slides = jisooApi.map(({ id, lookbook_img, Category, Color, Attributes }) => {
    return (
      <SwiperSlide key={id}>
        <div className="container" style={{ position: 'relative' }}>
          <div
            className="mainImg"
            style={{ position: 'absolute', top: '70px', left: '10px', zIndex: '1' }}
          >
            <img
              src={lookbook_img}
              alt="lookbook"
              style={{ width: '500px', height: '600px', objectFit: 'cover' }}
            />
          </div>
          <div
            className="behindBox"
            style={{
              width: '400px',
              height: '350px',
              backgroundColor: 'darkgray',
              position: 'absolute',
              left: '20%',
              top: '20px',
              zIndex: '0',
            }}
          ></div>
          <div
            className="infoBox"
            style={{
              width: '400px',
              height: '400px',
              backgroundColor: 'darksalmon',
              position: 'absolute',
              top: '150px',
              left: '530px',
              zIndex: '1',
            }}
          >
            <h3>TYPE</h3>
            <p>{Category}</p>
            <h3>COLOR</h3>
            <p>{Color}</p>
            <h3>FEATURES</h3>
            <p>{Attributes}</p>
            
          </div>
        </div>
      </SwiperSlide>
    );
  });

  return (
    <div style={{ backgroundColor: 'white' }}>
      <Swiper style={{ height: '800px' }}>{slides}</Swiper>
    </div>
  );
};

export default Slider;
