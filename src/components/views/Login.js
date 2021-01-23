import React from "react";
import { SpotifyAuth, Scopes } from "react-spotify-auth";
import Cookies from "js-cookie";

import keys from "../../HTTP/keys";
import LoginStyle from "../../styles/LoginStyle";
// import { token } from "../../HTTP/config";
import { Redirect } from "react-router-dom";

function Login(props) {
  if (Cookies.get("spotifyAuthToken")) return <Redirect to="/home" />;
  return (
    <LoginStyle>
      <div className="body container">
        <h1 className="text-center font-900">
          {" "}
          <span> mvsic</span> for everyone.
        </h1>
        <SpotifyAuth
          redirectUri="http://localhost:3000/"
          clientID={keys.clientID}
          scopes={[
            Scopes.userReadPrivate,
            Scopes.userReadEmail,
            Scopes.userLibraryRead,
            Scopes.userTopRead,
            Scopes.userReadRecentlyPlayed,
          ]}
          noLogo={true}
          title={<span>Login with spotify </span>}
          btnClassName="center mx-auto mt-4 login-btn"
          onAccessToken={(token) => {
            Cookies.set("spotifyAuthToken", token);
            props.history.push("/");
          }}
        />
      </div>
    </LoginStyle>
  );
}

export default Login;
