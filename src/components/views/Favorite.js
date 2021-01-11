import React from "react";
import { Link } from "react-router-dom";
import { useGlobalState } from "../../store/reducers/rootReducer";
import NavCard from "../reusables/NavCard";

function Favorite() {
  const { topTracks } = useGlobalState();
  return (
    <div className="my-5 pb-5 px-0 px-xl-5 mt-xl-2 overflow-hidden container">
      {topTracks.length ? (
        <NavCard title="Favorite songs" data={topTracks} />
      ) : (
        <div className="container-fluid text-center mt-5">
          <p>You have no favorite songs at the moment</p>
          <Link to="/" className="text-muted">
            {" "}
            GO BACK
          </Link>
        </div>
      )}

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
