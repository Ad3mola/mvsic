import { Grid } from "@material-ui/core";
import { lazy, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";
import { login } from "../../store/actions/authentication";
import BottomNav from "../reusables/BottomNav";
import DesktopNav from "../reusables/DesktopNav";
import PageHeader from "../reusables/PageHeader";

const Library = lazy(() => import("./Library"));
const Search = lazy(() => import("./Search"));

function Home({ match, history }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(login());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Grid container>
        <Grid item xs={false} lg={2} className="d-none d-lg-block">
          <DesktopNav />
        </Grid>
        <Grid item xs={12} lg={10} className="main-page">
          <PageHeader />
          <Switch>
            <Route exact path={`${match.path}`} component={Library} />
            <Route path={`${match.path}/search`} component={Search} />
            <Redirect to="/home" />
          </Switch>
        </Grid>
      </Grid>
      <BottomNav
        history={history}
        match={match}
        classes="d-lg-none fixed-bottom bottom-navigation"
      />
    </>
  );
}

export default Home;
