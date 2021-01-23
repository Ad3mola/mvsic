import React from "react";
import styled from "styled-components";
import ContainerCard from "./ContainerCard";
import ScrollCard from "./ScrollCard";

const CardStyle = styled.div`
  .btn-next,
  .btn-prev {
    font-weight: 600;
  }
  .navigation {
    button {
      background-color: transparent;
      font-size: 0.6rem;
      border: 1px solid rgb(88, 182, 60);
      padding: 0.2em 0.5em;
      color: rgb(88, 182, 60);
      border-radius: 5px;
      &:focus {
        outline: none;
      }
    }
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
  button.swiper-button-disabled {
    color: lightgray;
    border: 1px solid lightgray;
  }
  @media (max-width: 576px) {
    .swiper-slide {
      width: 140px !important;
      min-height: 170px !important;
      .text h6 {
        font-size: 0.7rem;
      }
    }
  }
`;

function NavCard({ title, publisher, data, loading }) {
  return (
    <CardStyle>
      <ContainerCard>
        <div className="d-flex justify-content-between align-items-center ">
          <h3 className=" font-weight-bold header pl-2 pl-xl-0">{title}</h3>
          <div className="my-auto mr-2">
            <div className="navigation text-right">
              <button className="btn-prev mr-4">PREV</button>
              <button className="btn-next">NEXT</button>
            </div>
          </div>
        </div>
        <ScrollCard
          loading={loading}
          data={data}
          componentClass="card-img-container"
          spaceBetween={5}
          type={publisher}
          className="swipe"
          slidesPerView={2}
          direction="horizontal"
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
        />
      </ContainerCard>
    </CardStyle>
  );
}

export default NavCard;
