import {
  LibraryMusic,
  MicNone,
  MusicNote,
  QueueMusic,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useGlobalState } from "../../store/reducers/rootReducer";
import HomepageStyle from "../../styles/HomeStyles";
import CategoriesList from "../reusables/CategoriesList";
import ContainerCard from "../reusables/ContainerCard";
import NavCard from "../reusables/NavCard";
import SwipeCard from "../reusables/SwipeCard";

function Library() {
  const { newReleases, savedAlbums, topSongs, loading } = useGlobalState();
  return (
    <HomepageStyle className="my-5 pb-5 px-0 px-xl-5 mt-xl-2 overflow-xl-hidden container-xl">
      <h1 className="container font-weight-bold d-xl-none mt-5 header lib-header">
        Library
      </h1>
      <div className="library">
        <ul className="d-xl-none library-list">
          <li>
            <Link to="/home/recent">
              <QueueMusic fontSize="small" />
              <span>Recently played</span>
            </Link>
          </li>
           
          <li>
            <Link to="/home/favorite">
              <MusicNote fontSize="small" /> <span>Songs</span>
            </Link>
          </li>
          <li>
            <Link to="/home/artists">
              <MicNone fontSize="small" /> <span>Artists</span>
            </Link>
          </li>
          <li>
            <Link to="/home/albums">
              <LibraryMusic fontSize="small" /> <span>Albums</span>
            </Link>
          </li>
        </ul>
      </div>

      <SwipeCard
        classnames="d-none d-xl-block"
        title="New Releases"
        data={newReleases}
        loading={loading}
      />
      <NavCard title="Recently Added Albums" data={savedAlbums} />
      <ContainerCard className="container category">
        <h4 className=" font-weight-bold header pl-2 pl-xl-0">Top Tracks</h4>
        <CategoriesList data={topSongs} loading={loading} />
      </ContainerCard>
    </HomepageStyle>
  );
}

export default Library;
