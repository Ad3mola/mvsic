import React from "react";
import SwiperCore, {
  Navigation,
  Pagination,
  A11y,
  EffectCoverflow,
  Mousewheel,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import styled from "styled-components";
import CardItem from "./CardItem";

SwiperCore.use([Navigation, Pagination, A11y, EffectCoverflow, Mousewheel]);

const ScrollCardStyle = styled.div`
  height: 100%;
  width: 100%;
`;

function ScrollCard({ styles, componentClass, ...props }) {
  return (
    <>
      <ScrollCardStyle>
        <Swiper {...props} mousewheel={true}>
          <SwiperSlide style={styles}>
            <CardItem classnames={componentClass} />
          </SwiperSlide>
          <SwiperSlide style={styles}>
            <CardItem classnames={componentClass} />
          </SwiperSlide>
          <SwiperSlide style={styles}>
            <CardItem classnames={componentClass} />
          </SwiperSlide>
          <SwiperSlide style={styles}>
            <CardItem classnames={componentClass} />
          </SwiperSlide>
          <SwiperSlide style={styles}>
            <CardItem classnames={componentClass} />
          </SwiperSlide>
          <SwiperSlide style={styles}>
            <CardItem classnames={componentClass} />
          </SwiperSlide>
          <SwiperSlide style={styles}>
            <CardItem classnames={componentClass} />
          </SwiperSlide>
        </Swiper>
      </ScrollCardStyle>
      <div className="pag"></div>
    </>
  );
}

export default ScrollCard;
