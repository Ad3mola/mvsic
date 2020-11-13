import axios from "axios";
import Cookies from "js-cookie";

const baseURL = "https://api.spotify.com/v1/";
export const token = Cookies.get("spotifyAuthToken");

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

// http.interceptors.request.use((config) => {
//   console.log(config);
//   config.headers.Authorization =
//   return config;
// });
http.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (401 === error.response.status) {
      // swal({
      //     title: "Session Expired",
      //     text: "Your session has expired. Would you like to be redirected to the login page?",
      //     type: "warning",
      //     showCancelButton: true,
      //     confirmButtonColor: "#DD6B55",
      //     confirmButtonText: "Yes",
      //     closeOnConfirm: false
      // }, function(){
      //     window.location = '/login';
      // });
      Cookies.remove("spotifyAuthToken");
      window.location = "/login";
    } else {
      return Promise.reject(error);
    }
  }
);

export default http;
