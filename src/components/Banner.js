import React from "react";
// Import Swiper React components
import {Autoplay} from 'swiper'
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
// Import SwiperChild
import SwiperChild from "./SwiperChild";



function Banner() {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      modules={[Autoplay]}
      loop={true}
    >
      <SwiperSlide>
        <SwiperChild img="https://m.media-amazon.com/images/I/61W-QJozfgL._SX3000_.jpg" />
      </SwiperSlide>

      <SwiperSlide>
        <SwiperChild img="https://m.media-amazon.com/images/I/71tIrZqybrL._SX3000_.jpg" />
      </SwiperSlide>

      <SwiperSlide>
        <SwiperChild img="https://m.media-amazon.com/images/I/61TD5JLGhIL._SX3000_.jpg" />
      </SwiperSlide>

      <SwiperSlide>
        <SwiperChild img="https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg" />
      </SwiperSlide>

      <SwiperSlide>
        <SwiperChild img="https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg" />
      </SwiperSlide>

      <SwiperSlide>
        <SwiperChild img="https://m.media-amazon.com/images/I/71qid7QFWJL._SX3000_.jpg" />
      </SwiperSlide>
    </Swiper>
  );
}

export default Banner;
