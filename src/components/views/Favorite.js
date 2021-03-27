import React from "react";
import { Link } from "react-router-dom";
import { useGlobalState } from "../../store/reducers/rootReducer";
import BrowseStyle from "../../styles/BrowseStyle";
import CategoriesList from "../reusables/CategoriesList";
import ContainerCard from "../reusables/ContainerCard";
import NavCard from "../reusables/NavCard";

function Favorite() {
  const { topTracks, loading } = useGlobalState();
  return (
    <BrowseStyle className="my-5 pb-5 px-0 px-xl-5 mt-xl-2 overflow-hidden container">
      {topTracks.length ? (
        <ContainerCard className="container category">
          <h4 className=" font-weight-bold header pl-2 pl-xl-0">
            Favorite songs
          </h4>
          <CategoriesList data={topTracks} loading={loading} />
        </ContainerCard>
      ) : (
        <div className="container-fluid text-center mt-5">
          <p>You have no favorite songs at the moment</p>
          <Link to="/" className="text-muted">
            {" "}
            GO BACK
          </Link>
        </div>
      )}
      {loading ? <p className="container-fluid">Loading...</p> : null}

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
    </BrowseStyle>
  );
}

export default Favorite;
