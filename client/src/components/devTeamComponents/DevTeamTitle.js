import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper/core';
import 'components/devTeamComponents/css/DevTeamTitle.css';

SwiperCore.use([Autoplay, Pagination, Navigation]);

const DevTeamTitle = () => {
  return (
    <>
      <div className="devTeam__title">
        <div className="title__photo">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src="/images/devTeam/devTeam_photo1.jpg" alt="Dev Team Photo1" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/devTeam/devTeam_photo2.jpg" alt="Dev Team Photo2" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/devTeam/devTeam_photo3.jpg" alt="Dev Team Photo3" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/devTeam/devTeam_photo4.jpg" alt="Dev Team Photo4" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};
export default DevTeamTitle;
