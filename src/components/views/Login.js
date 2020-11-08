import React from "react";
import { SpotifyAuth, Scopes } from "react-spotify-auth";
import Cookies from "js-cookie";

import keys from "../../HTTP/keys";
import LoginStyle from "../../styles/LoginStyle";

function Login(props) {
  return (
    <LoginStyle className="container">
      <h1 className="text-center font-900">
        {" "}
        <span> mvsic</span> for everyone.
      </h1>
      <SpotifyAuth
        redirectUri="http://localhost:3000/login"
        clientID={keys.clientID}
        scopes={[Scopes.userReadPrivate, Scopes.userReadEmail]}
        noLogo={true}
        title={<span>Login with spotify </span>}
        btnClassName="center login-btn"
        onAccessToken={(token) => {
          Cookies.set("spotifyAuthToken", token);
          props.history.push("/");
        }}
      />
    </LoginStyle>
  );
}

export default Login;
