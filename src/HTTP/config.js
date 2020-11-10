import axios from "axios";
import Cookies from "js-cookie";

const baseURL = "https://api.spotify.com/v1/";
export const token = Cookies.get("spotifyAuthToken");
console.log(token);

// export const setCookies = (props) => {
//   const retrieveToken = props.location.hash.replace(
//     /[?#access]+([^=&]+)=/gi,
//     ""
//   );
//   Cookies.set("spotifyAuthToken", retrieveToken);
// };

const http = axios.create({
  baseURL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: `Bearer ${token}`,
  },
  responseType: "json",
});

export default http;
