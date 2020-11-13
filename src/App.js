import { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./components/views/Login";
import ProtectedRoute from "./components/reusables/ProtectedRoute";
import NotFound from "./components/views/NotFound";

const Home = lazy(() => import("./components/views/Home"));

function App() {
  return (
    <Suspense fallback="Loading...">
      <Switch>
        <Route exact path="/" component={Login} />
        <ProtectedRoute path="/home" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}

export default App;
