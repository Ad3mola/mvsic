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

function ScrollCard({ styles, componentClass, data, type, loading, ...props }) {
  return (
    <>
      <ScrollCardStyle>
        {loading ? (
          <p className="container-fluid">Loading...</p>
        ) : data.length ? (
          <Swiper {...props} mousewheel={true}>
            {data.map((album) => (
              <SwiperSlide
                key={
                  album.id
                    ? album.id
                    : album.track
                    ? album.track.album.id
                    : album.album.id
                }
                style={{
                  background: `linear-gradient(  90deg,
                    rgba(2, 0, 36, 0.4) 0%,
                    rgba(35, 92, 63, 0.3) 100%,
                    rgba(0, 212, 255, 0.3) 100%),url(
                  ${
                    album.images
                      ? album.images[1].url
                      : album.track
                      ? album.track.album.images[1].url
                      : album.album.images[1].url
                  }
                )`,
                }}
              >
                <CardItem
                  classnames={componentClass}
                  link={
                    album.id
                      ? album.id
                      : album.track
                      ? album.track.album.id
                      : album.album.id
                  }
                  title={
                    album.name
                      ? album.name
                      : album.track
                      ? album.track.album.name
                      : album.album.name
                  }
                  smallText={
                    album.artists
                      ? album.artists[0].name
                      : album.track
                      ? album.track.album.artists[0].name
                      : album.album
                      ? album.album.artists[0].name
                      : album.publisher
                  }
                  img={
                    album.images
                      ? album.images[1].url
                      : album.track
                      ? album.track.album.images[1].url
                      : album.album.images[1].url
                  }
                />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <p className="container-fluid">Currently Empty</p>
        )}
      </ScrollCardStyle>
      <div className="pag"></div>
    </>
  );
}

export default ScrollCard;
