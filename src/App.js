import { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./components/views/Login";
import ProtectedRoute from "./components/reusables/ProtectedRoute";
import NotFound from "./components/views/NotFound";
import DesktopNav from "./components/reusables/DesktopNav";
import { Grid } from "@material-ui/core";
import PageHeader from "./components/reusables/PageHeader";

const Home = lazy(() => import("./components/views/Home"));

function App() {
  return (
    <Suspense fallback="Loading...">
      <Switch>
        <Route path="/login" component={Login} />
        <>
          <Grid container>
            <Grid item xs={false} lg={2} className="d-none d-lg-block">
              <DesktopNav />
            </Grid>
            <Grid item xs={12} lg={10}>
              <PageHeader />
              <ProtectedRoute exact path="/" component={Home} />
            </Grid>
          </Grid>
        </>
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}

export default App;
