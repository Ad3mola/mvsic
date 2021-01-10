import { Grid } from "@material-ui/core";
import { lazy, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";
import { login } from "../../store/actions/authentication";
import { getSaved } from "../../store/actions/songs";
import BottomNav from "../reusables/BottomNav";
import DesktopNav from "../reusables/DesktopNav";
import MobilePageHeader from "../reusables/MobilePageHeader";
import PageHeader from "../reusables/PageHeader";

const Library = lazy(() => import("./Library"));
const Browse = lazy(() => import("./Browse"));
const Radio = lazy(() => import("./Radio"));
const RecentlyPlayed = lazy(() => import("./RecentlyPlayed"));
const Favorite = lazy(() => import("./Favorite"));
const Artists = lazy(() => import("./Artists"));
const Albums = lazy(() => import("./Albums"));
const SearchSong = lazy(() => import("./SearchSong"));

function Home({ match, history }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(login());
    dispatch(getSaved());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Grid container>
        <Grid item xs={false} lg={2} className="d-none d-xl-block">
          <DesktopNav />
        </Grid>
        <Grid item xs={12} lg={10} className="main-page">
          <PageHeader />
          <MobilePageHeader />
          <Switch>
            <Route exact path={`${match.path}`} component={Library} />
            <Route path={`${match.path}/search`} component={SearchSong} />
            <Route path={`${match.path}/browse`} component={Browse} />
            <Route path={`${match.path}/radio`} component={Radio} />
            <Route path={`${match.path}/recent`} component={RecentlyPlayed} />
            <Route path={`${match.path}/favorite`} component={Favorite} />
            <Route path={`${match.path}/artists`} component={Artists} />
            <Route path={`${match.path}/albums`} component={Albums} />

            <Redirect to="/home" />
          </Switch>
        </Grid>
      </Grid>
      <BottomNav
        history={history}
        match={match}
        classnames="d-xl-none fixed-bottom bottom-navigation"
      />
    </>
  );
}

export default Home;
