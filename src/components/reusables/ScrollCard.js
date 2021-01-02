import React from "react";
import SwiperCore, { Navigation, Pagination, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import ContainerCard from "./ContainerCard";
import styled from "styled-components";
import CardItem from "./CardItem";

SwiperCore.use([Navigation, Pagination, A11y]);

const ScrollCardStyle = styled.div`
  height: 100%;
  width: 100%;
  .pag .swiper-pagination-bullet {
    margin: 0.5em 0.3em;
    border: 1px solid #ffd3d3;
    background-color: white;
    opacity: 1;
    width: 16px;
    height: 16px;
  }
  .pag .swiper-pagination-bullet-active {
    background: red;
  }
  .swiper-slide {
    width: 200px !important;
    height: 200px !important;
  }
  .card-img-container {
    margin: 0.9em 0.5em;
    &:hover {
      text-decoration: none;
    }
    img {
      border-radius: 10px;
    }
  }

  @media (max-width: 576px) {
    .swiper-slide {
      width: 150px !important;
      height: 170px !important;
    }
  }
`;

function ScrollCard() {
  return (
    <ContainerCard>
      <ScrollCardStyle>
        <Swiper
          spaceBetween={5}
          slidesPerView={2}
          breakpoints={{
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 0,
            },
          }}
          navigation={{
            nextEl: ".btn-next",
            prevEl: ".btn-prev",
          }}
        >
          <SwiperSlide>
            <CardItem classname="card-img-container" />
          </SwiperSlide>
          <SwiperSlide>
            <CardItem classname="card-img-container" />
          </SwiperSlide>
          <SwiperSlide>
            <CardItem classname="card-img-container" />
          </SwiperSlide>
          <SwiperSlide>
            <CardItem classname="card-img-container" />
          </SwiperSlide>
          <SwiperSlide>
            <CardItem classname="card-img-container" />
          </SwiperSlide>
          <SwiperSlide>
            <CardItem classname="card-img-container" />
          </SwiperSlide>
          <SwiperSlide>
            <CardItem classname="card-img-container" />
          </SwiperSlide>
        </Swiper>
      </ScrollCardStyle>
    </ContainerCard>
  );
}

export default ScrollCard;
