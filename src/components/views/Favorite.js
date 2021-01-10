import React from "react";
import { useGlobalState } from "../../store/reducers/rootReducer";
import NavCard from "../reusables/NavCard";

function Favorite() {
  const { topTracks } = useGlobalState();
  return (
    <div className="my-5 pb-5 px-0 px-xl-5 mt-xl-2 overflow-hidden container">
      <NavCard title="Favorite songs" data={topTracks} />
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

export default Favorite;
