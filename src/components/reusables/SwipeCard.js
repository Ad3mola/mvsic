import React from "react";
import styled from "styled-components";
import ScrollCard from "./ScrollCard";

const SwipeStyles = styled.section`
  .swiper-slide {
    width: 420px !important;
    height: 250px !important;
    border-radius: 25px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
  }
  .text {
    padding: 1.5em 1em;
    h6,
    small {
      color: white !important;
    }
    h6 {
      font-size: clamp(1.5rem, -0.875rem + 8.333vw, 2.5rem);
    }
    small {
      font-size: 100%;
    }
  }
  .text {
    visibility: none;
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
  }
  .swiper-slide {
    background-position: center !important;
    background-size: cover !important;
    background-repeat: no-repeat !important;
  }
  .card-container {
    background-color: none;
    text-decoration: none;
    img {
      display: none;
    }
  }
  @media (max-width: 576px) {
    .swiper-slide {
      width: 300px !important;
      height: 200px !important;
    }
  }
`;

function SwipeCard({ classnames, title, data }) {
  return (
    <SwipeStyles className={"my-5 " + classnames}>
      <h2 className="font-weight-bold pl-2 pl-xl-0 header">{title}</h2>
      <ScrollCard
        data={data}
        componentClass="card-container"
        effect="coverflow"
        centeredSlides={true}
        spaceBetween={5}
        slidesPerView="auto"
        direction="horizontal"
        initialSlide={2}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2,
          slideShadows: false,
        }}
        breakpoints={{
          768: {
            spaceBetween: 25,
          },
          1024: {
            spaceBetween: 25,
          },
        }}
      />
    </SwipeStyles>
  );
}

export default SwipeCard;
