import React from "react";
import ContainerCard from "../reusables/ContainerCard";
import BrowseStyle from "../../styles/BrowseStyle";
import { Grid } from "@material-ui/core";
import ThumbnailCard from "../reusables/ThumbnailCard";
import NavCard from "../reusables/NavCard";
import { useGlobalState } from "../../store/reducers/rootReducer";
import SwipeCard from "../reusables/SwipeCard";

function Browse() {
  const {
    topSongs,
    categories,
    featuredPlaylists,
    newReleases,
    loading,
  } = useGlobalState();
  return (
    <BrowseStyle className="my-5 pb-5 px-0 px-xl-5 mt-xl-2 overflow-hidden container">
      <SwipeCard title="New Releases" data={newReleases} loading={loading} />
      <NavCard title="Top Tracks" data={topSongs} loading={loading} />
      <Grid container spacing={3}>
        <Grid item xs={12} lg={6}>
          <ContainerCard>
            <h5 className=" font-weight-bold header pl-2 pl-xl-0">
              Featured Playlists
            </h5>
            <ThumbnailCard
              data={featuredPlaylists}
              type="playlist"
              loading={loading}
            />
          </ContainerCard>
        </Grid>
        <Grid item xs={12} lg={6}>
          <ContainerCard>
            <h5 className=" font-weight-bold header pl-2 pl-xl-0">
              Top Categories
            </h5>
            <ThumbnailCard
              data={categories}
              type="category"
              loading={loading}
            />
          </ContainerCard>
        </Grid>
      </Grid>
    </BrowseStyle>
  );
}

export default Browse;
