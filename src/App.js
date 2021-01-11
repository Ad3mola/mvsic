import { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Login from "./components/views/Login";
import ProtectedRoute from "./components/reusables/ProtectedRoute";
import NotFound from "./components/views/NotFound";
import Loader from "./components/reusables/Loader";
import { lightTheme } from "./theme";

const Home = lazy(() => import("./components/views/Home"));

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route exact path="/" component={Login} />
          <ProtectedRoute path="/home" component={Home} />
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
