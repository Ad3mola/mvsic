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

function Library() {
  const { user } = useGlobalState();

  return (
    <HomepageStyle className="mt-5 mt-lg-2">
      <h1 className="container font-weight-bold d-none d-lg-block header ">
        Categories
      </h1>
      <h1 className="container font-weight-bold d-lg-none header">Library</h1>
      <div className="library">
        <ul className="d-lg-none library-list">
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
    </HomepageStyle>
  );
}

export default Library;
