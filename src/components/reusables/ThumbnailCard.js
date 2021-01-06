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
    justify-content: center;
    h6 {
      display: none;
    }
    small {
      padding-top: 1em;
      color: black !important;
      font-weight: bolder;
    }
    img {
      width: 50px !important;
      height: 50px !important;
      border-radius: 50%;
      object-fit: cover;
    }
  }
`;

function ThumbnailCard() {
  return (
    <GridContainer container spacing={2} className="px-2 pt-3">
      <Grid item xs={4} md={2} lg={3}>
        <CardItem classnames="card-item-container" />
      </Grid>
      <Grid item xs={4} md={2} lg={3}>
        <CardItem classnames="card-item-container" />
      </Grid>
      <Grid item xs={4} md={2} lg={3}>
        <CardItem classnames="card-item-container" />
      </Grid>
      <Grid item xs={4} md={2} lg={3}>
        <CardItem classnames="card-item-container" />
      </Grid>
      <Grid item xs={4} md={2} lg={3}>
        <CardItem classnames="card-item-container" />
      </Grid>
      <Grid item xs={4} md={2} lg={3}>
        <CardItem classnames="card-item-container" />
      </Grid>
      <Grid item xs={4} md={2} lg={3}>
        <CardItem classnames="card-item-container" />
      </Grid>
      <Grid item xs={4} md={2} lg={3}>
        <CardItem classnames="card-item-container" />
      </Grid>
    </GridContainer>
  );
}

export default ThumbnailCard;
