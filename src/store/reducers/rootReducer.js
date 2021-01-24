import { shallowEqual, useSelector } from "react-redux";

let initialState = {
  user: null,
  newReleases: [],
  topArtists: [],
  topTracks: [],
  topSongs: [],
  userPlaylists: [],
  savedAlbums: [],
  categories: [],
  featuredPlaylists: [],
  shows: [],
  recentlyPlayed: [],
  artists: [],
  albums: [],
  searchList: null,
  loading: true,
  userLoading: true,
  offline: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        user: action.payload,
      };
    case "NEW_RELEASES":
      return {
        ...state,
        newReleases: action.payload,
      };
    case "TOP_ARTISTS":
      return {
        ...state,
        topArtists: action.payload,
      };
    case "TOP_TRACKS":
      return {
        ...state,
        topTracks: action.payload,
      };
    case "TOP_SONGS":
      return {
        ...state,
        topSongs: action.payload,
      };
    case "USER_PLAYLISTS":
      return {
        ...state,
        userPlaylists: action.payload,
      };
    case "SAVED_ALBUMS":
      return {
        ...state,
        savedAlbums: action.payload,
      };
    case "CATEGORIES":
      return {
        ...state,
        categories: action.payload,
      };
    case "FEATURED_PLAYLISTS":
      return {
        ...state,
        featuredPlaylists: action.payload,
      };
    case "SHOWS":
      return {
        ...state,
        shows: action.payload,
      };
    case "RECENTLY_PLAYED":
      return {
        ...state,
        recentlyPlayed: action.payload,
      };
    case "ARTISTS":
      return {
        ...state,
        artists: action.payload,
      };
    case "ALBUMS":
      return {
        ...state,
        albums: action.payload,
      };
    case "SEARCH_LIST":
      return {
        ...state,
        searchList: action.payload,
      };
    case "LOADING":
      return {
        ...state,
        loading: action.payload,
      };
    case "USER_LOADING":
      return {
        ...state,
        userLoading: action.payload,
      };
    case "OFFLINE":
      return {
        ...state,
        offline: action.payload,
      };
    default:
      return state;
  }
};

export const useGlobalState = () => {
  return useSelector((state) => state, shallowEqual);
};

export default reducer;
