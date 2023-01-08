import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/controller";
import "swiper/css/pagination";
import "swiper/css/autoplay";

// Import SwiperChild
import SwiperChild from "./SwiperChild";
import { Pagination, Autoplay, EffectFade } from "swiper";

function Banner() {
  return (
    <Swiper
      slidesPerView={3}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      modules={[Pagination, Autoplay, EffectFade]}
      autoplay
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      loop={true}
      effect="fade"
    >
      <SwiperSlide className="test">
        <SwiperChild img="https://m.media-amazon.com/images/I/61W-QJozfgL._SX3000_.jpg" />
      </SwiperSlide>

      <SwiperSlide className="test">
        <SwiperChild img="https://m.media-amazon.com/images/I/71tIrZqybrL._SX3000_.jpg" />
      </SwiperSlide>

      <SwiperSlide className="test">
        <SwiperChild img="https://m.media-amazon.com/images/I/61TD5JLGhIL._SX3000_.jpg" />
      </SwiperSlide>

      <SwiperSlide className="test">
        <SwiperChild img="https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg" />
      </SwiperSlide>

      <SwiperSlide className="test">
        <SwiperChild img="https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg" />
      </SwiperSlide>

      <SwiperSlide className="test">
        <SwiperChild img="https://m.media-amazon.com/images/I/71qid7QFWJL._SX3000_.jpg" />
      </SwiperSlide>
    </Swiper>
  );
}

export default Banner;
