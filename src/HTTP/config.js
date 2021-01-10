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
    if (error.response) {
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
      window.location = "/";
    } else {
      return Promise.reject(error);
    }
  }
);
// http.interceptors.request.use(
//   function (request) {
//     return request;
//   },
//   function (error) {
//     if (error.request) {
//       // swal({
//       //     title: "Session Expired",
//       //     text: "Your session has expired. Would you like to be redirected to the login page?",
//       //     type: "warning",
//       //     showCancelButton: true,
//       //     confirmButtonColor: "#DD6B55",
//       //     confirmButtonText: "Yes",
//       //     closeOnConfirm: false
//       // }, function(){
//       //     window.location = '/login';
//       // });
//       console.log("request error");
//     } else {
//       return Promise.reject(error);
//     }
//   }
// );

export default http;
