import { Grid } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getRecent } from "../../store/actions/songs";
import { useGlobalState } from "../../store/reducers/rootReducer";
import CategoriesList from "../reusables/CategoriesList";
import ContainerCard from "../reusables/ContainerCard";
import ThumbnailCard from "../reusables/ThumbnailCard";

function RecentlyPlayed() {
  const { recentlyPlayed } = useGlobalState();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRecent());
  }, []);
  return (
    <div className="my-5 pb-5 px-0 px-xl-5 mt-xl-2 overflow-hidden container">
      <ContainerCard className="container category">
        <h1 className=" font-weight-bold header pl-2 pl-xl-0">
          Recently played
        </h1>
        <CategoriesList data={recentlyPlayed} />
      </ContainerCard>
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

export default RecentlyPlayed;