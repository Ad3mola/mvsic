import React, { useEffect, useState } from "react";
import { getCategoryPlaylist } from "../../store/actions/songs";
import CategoriesList from "../reusables/CategoriesList";
import ContainerCard from "../reusables/ContainerCard";

function CategoryDetails(props) {
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    const { id } = props.match.params;
    getCategoryPlaylist(id).then((data) => setPlaylists(data));
  }, []);
  return (
    <div className="my-5 pb-5 px-0 px-xl-5 mt-xl-2 overflow-hidden container height">
      <ContainerCard className="container category">
        <h4 className=" font-weight-bold header pl-2 pl-xl-0">Playlists</h4>
        {playlists.length ? (
          <CategoriesList data={playlists} type="playlist" />
        ) : (
          <p className="container-fluid text-center">loading</p>
        )}
      </ContainerCard>
    </div>
  );
}

export default CategoryDetails;
