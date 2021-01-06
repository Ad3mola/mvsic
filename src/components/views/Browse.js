import React from "react";
import ContainerCard from "../reusables/ContainerCard";
import BrowseStyle from "../../styles/BrowseStyle";
import { Grid } from "@material-ui/core";
import ThumbnailCard from "../reusables/ThumbnailCard";
import NavCard from "../reusables/NavCard";

function Browse() {
  return (
    <BrowseStyle className="my-5 pb-5 px-0 px-xl-5 mt-xl-2 overflow-hidden container">
      <NavCard title="Featured Playlists" />
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
