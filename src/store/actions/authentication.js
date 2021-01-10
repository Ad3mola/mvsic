import http from "../../HTTP/config";
import { getNewReleases, getUserPlaylists } from "./songs";

export const login = () => {
  return (dispatch) => {
    Promise.all([getUser(), getNewReleases(), getUserPlaylists()]).then(
      (values) => {
        dispatch({ type: "LOGIN", payload: values[0].data });
        dispatch({
          type: "NEW_RELEASES",
          payload: values[1].data.albums.items,
        });
        dispatch({ type: "USER_PLAYLISTS", payload: values[2].data });
      }
    );
  };
};

const getUser = async () => {
  let response = await http.get("me");
  return response;
};
