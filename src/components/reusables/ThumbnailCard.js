import { Grid } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import CardItem from "./CardItem";

const GridContainer = styled(Grid)`
  .card-item-container {
    background-color: lightgray;
    border-radius: 8px;
    height: 130px;
    display: flex !important;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 0.5em;
    .main-container {
      height: 25%;
    }
    .text {
      height: 70%;
    }
    &:hover {
      opacity: 0.9;
    }
    h6 {
      display: none;
    }
    small {
      display: inline-block;
      padding-top: 0.7em;
      color: black !important;
      font-weight: bolder;
      text-align: center;
      word-wrap: break-word;
      @media (max-width: 576px) {
        font-size: 70%;
      }
    }
    img {
      width: 50px !important;
      height: 50px !important;
      border-radius: 50%;
      object-fit: cover;
    }
  }
`;

function ThumbnailCard({ data }) {
  return (
    <GridContainer container spacing={2} className="px-2 pt-3">
      {data.length
        ? data.map((item) => (
            <Grid key={item.id} item xs={4} md={2} lg={3}>
              <CardItem
                classnames="card-item-container"
                img={item.icons ? item.icons[0].url : item.images[0].url}
                smallText={item.name}
              />
            </Grid>
          ))
        : null}
    </GridContainer>
  );
}

export default ThumbnailCard;
