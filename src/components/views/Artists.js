import { Grid } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getArtists } from "../../store/actions/songs";
import { useGlobalState } from "../../store/reducers/rootReducer";
import ContainerCard from "../reusables/ContainerCard";
import NavCard from "../reusables/NavCard";
import SwipeCard from "../reusables/SwipeCard";
import ThumbnailCard from "../reusables/ThumbnailCard";

function Artists() {
  const { artists } = useGlobalState();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getArtists());
  }, []);

  return (
    <div className="my-5 pb-5 px-0 px-xl-5 mt-xl-2 overflow-hidden container">
      <SwipeCard data={artists} />
      {/* <Grid container spacing={3}>
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
      </Grid> */}
    </div>
  );
}

export default Artists;
