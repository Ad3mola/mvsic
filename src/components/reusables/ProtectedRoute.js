import React from "react";
import { Redirect, Route } from "react-router-dom";

import Cookies from "js-cookie";

function ProtectedRoute({ component: Component, render, ...rest }) {
  const token = Cookies.get("spotifyAuthToken");
  return (
    <Route
      {...rest}
      render={(props) => {
        if (!token) return <Redirect to="/login" />;
        return Component ? <Component {...props} /> : render(props);
      }}
    />
  );
}

export default ProtectedRoute;
