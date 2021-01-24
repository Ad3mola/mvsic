import React, { useEffect, useState } from "react";
import { getPlaylistDetail } from "../../store/actions/songs";
import CategoriesList from "../reusables/CategoriesList";
import ContainerCard from "../reusables/ContainerCard";

function PlaylistDetails(props) {
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    const { id } = props.match.params;
    getPlaylistDetail(id).then((data) => setTracks(data));
  }, []);
  return (
    <div className="my-5 pb-5 px-0 px-xl-5 mt-xl-2 overflow-hidden container height">
      <ContainerCard className="container category">
        <h4 className=" font-weight-bold header pl-2 pl-xl-0">Tracks</h4>
        {tracks.length ? (
          <CategoriesList data={tracks} />
        ) : (
          <p className="container-fluid text-center">loading</p>
        )}
      </ContainerCard>
    </div>
  );
}

export default PlaylistDetails;
