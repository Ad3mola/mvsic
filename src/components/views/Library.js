import {
  LibraryMusic,
  MicNone,
  MusicNote,
  QueueMusic,
} from "@material-ui/icons";
import { useLayoutEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { login } from "../../store/actions/authentication";
import { useGlobalState } from "../../store/reducers/rootReducer";
import HomepageStyle from "../../styles/HomeStyles";
import CategoriesList from "../reusables/CategoriesList";
import ContainerCard from "../reusables/ContainerCard";
import SwipeCard from "../reusables/SwipeCard";

function Library() {
  const { user } = useGlobalState();

  return (
    <HomepageStyle className="my-5 pb-5 px-0 px-xl-5 mt-xl-2 overflow-hidden container-xl">
      <h1 className="container font-weight-bold d-xl-none header">Library</h1>
      <div className="library">
        <ul className="d-xl-none library-list">
          <li>
            <Link to="/">
              <QueueMusic fontSize="small" /> <span>Playlists</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <MicNone fontSize="small" /> <span>Artists</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <LibraryMusic fontSize="small" /> <span>Albums</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <MusicNote fontSize="small" /> <span>Songs</span>
            </Link>
          </li>
        </ul>
      </div>
      <SwipeCard classnames="d-none d-xl-block" />
      <ContainerCard className="container category">
        <h1 className=" font-weight-bold header pl-2 pl-xl-0">Categories</h1>
        <CategoriesList />
      </ContainerCard>
      <ContainerCard className="container mt-5 d-none d-xl-block recommended">
        <h4 className="font-weight-bold pl-2 pl-xl-0">Recommended for You</h4>
        <CategoriesList />
      </ContainerCard>
    </HomepageStyle>
  );
}

export default Library;
