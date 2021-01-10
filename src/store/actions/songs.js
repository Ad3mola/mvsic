import http from "../../HTTP/config";

export const getSaved = () => {
  return (dispatch) => {
    Promise.all([
      topArtists(),
      topTracks(),
      getTopLists(),
      getSavedAlbums(),
    ]).then((values) => {
      dispatch({ type: "TOP_ARTISTS", payload: values[0].data.items });
      dispatch({ type: "TOP_TRACKS", payload: values[1].data.items });
      dispatch({ type: "TOP_SONGS", payload: values[2].data.tracks.items });
      dispatch({ type: "SAVED_ALBUMS", payload: values[3].data.items });
    });
  };
};
export const getBrowse = () => {
  return (dispatch) => {
    Promise.all([getCategories(), getFeaturedPlaylists()]).then((values) => {
      dispatch({
        type: "CATEGORIES",
        payload: values[0].data.categories.items,
      });
      dispatch({
        type: "FEATURED_PLAYLISTS",
        payload: values[1].data.playlists.items,
      });
    });
  };
};
export const getRadio = () => {
  return (dispatch) => {
    Promise.all([getShows()]).then((values) => {
      dispatch({
        type: "SHOWS",
        payload: values[0].data.shows,
      });
    });
  };
};
export const getRecent = () => {
  return (dispatch) => {
    Promise.all([getRecentlyPlayed()]).then((values) => {
      dispatch({
        type: "RECENTLY_PLAYED",
        payload: values[0].data.items,
      });
    });
  };
};
export const getArtists = () => {
  return (dispatch) => {
    Promise.all([artists()]).then((values) => {
      dispatch({
        type: "ARTISTS",
        payload: values[0].data.artists,
      });
    });
  };
};
export const getAlbums = () => {
  return (dispatch) => {
    Promise.all([albums()]).then((values) => {
      dispatch({
        type: "ALBUMS",
        payload: values[0].data.albums,
      });
    });
  };
};

export const getNewReleases = async () => {
  let response = await http.get("browse/new-releases?offset=0&limit=10");
  return response;
};
export const topArtists = async () => {
  let response = await http.get("me/top/artists");
  return response;
};
export const topTracks = async () => {
  let response = await http.get(`me/top/tracks`);
  return response;
};
export const getCategories = async () => {
  let response = await http.get(`browse/categories?limit=8`);
  return response;
};
export const getTopLists = async () => {
  let response = await http.get(`playlists/37i9dQZF1DX4dyzvuaRJ0n`);
  return response;
};
export const getUserPlaylists = async () => {
  let response = await http.get(`me/playlists`);
  return response;
};
export const getSavedAlbums = async () => {
  let response = await http.get(`me/albums`);
  return response;
};
export const getFeaturedPlaylists = async () => {
  let response = await http.get(`browse/featured-playlists?limit=8`);
  return response;
};
export const getShows = async () => {
  let response = await http.get(
    `shows?ids=5CfCWKI5pZ28U0uOzXkDHe%2C5as3aKmN2k11yfDDDSrvaZ`
  );
  return response;
};
export const getRecentlyPlayed = async () => {
  let response = await http.get(`me/player/recently-played?limit=10`);
  return response;
};
export const artists = async () => {
  let response = await http.get(
    `artists?ids=2CIMQHirSU0MQqyYHq0eOx%2C57dN52uHvrHOxijzpIgu3E%2C1vCWHaC5f2uS3yhpwWbIA6`
  );
  return response;
};
export const albums = async () => {
  let response = await http.get(
    `albums?ids=382ObEPsp2rxGrnsizN5TX%2C1A2GTWGtFfWp7KSQTwWOyo%2C2noRn2Aes5aoNVsU6iWThc`
  );
  return response;
};

export const getSearch = (q) => {
  return async (dispatch) => {
    try {
      let response = await http.get(
        `search?q=${q}&type=track%2Cartist&offset=5`
      );
      dispatch({
        type: "SEARCH_LIST",
        payload: response.data,
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
};
