import React from "react";
import ContainerCard from "../reusables/ContainerCard";
import BrowseStyle from "../../styles/BrowseStyle";
import ScrollCard from "../reusables/ScrollCard";
import { Grid } from "@material-ui/core";
import CardItem from "../reusables/CardItem";
import ThumbnailCard from "../reusables/ThumbnailCard";

function Browse() {
  return (
    <BrowseStyle className="my-5 pb-5 px-0 px-xl-5 mt-xl-2 overflow-hidden container">
      <ContainerCard>
        <div className="d-flex justify-content-between align-items-center ">
          <h3 className=" font-weight-bold header pl-2 pl-xl-0">
            Featured Playlists
          </h3>
          <div className="my-auto mr-2">
            <div className="navigation text-right">
              <button className="btn-prev mr-4">PREV</button>
              <button className="btn-next">NEXT</button>
            </div>
          </div>
        </div>
        <ScrollCard />
      </ContainerCard>
      <Grid container spacing={3}>
        <Grid item xs={12} lg={6}>
          <ContainerCard>
            <h5 className=" font-weight-bold header pl-2 pl-xl-0">
              New Releases
            </h5>
            <ThumbnailCard />
          </ContainerCard>
        </Grid>
        <Grid item xs={12} lg={6}>
          <ContainerCard>
            <h5 className=" font-weight-bold header pl-2 pl-xl-0">
              Recomendations
            </h5>
            <ThumbnailCard />
          </ContainerCard>
        </Grid>
      </Grid>
    </BrowseStyle>
  );
}

export default Browse;
