import http from "../../HTTP/config";
import Cookies from "js-cookie";

// export const login = () => {
//   return (dispatch) => {
//     Promise.all([getUser()]).then(
//       (values) => {
//         dispatch({ type: "LOGIN", payload: values[0].data });

//       }
//     );
//     // .then(() => dispatch({ type: "LOADING", payload: false }));
//   };
// };

export const signOut = () => {
  Cookies.remove("spotifyAuthToken");
  window.location = "/";
  console.log("go");
};

export const login = () => {
  return async (dispatch) => {
    try {
      let response = await http.get("me");
      dispatch({ type: "LOGIN", payload: response.data });
      if (response) {
        dispatch({ type: "USER_LOADING", payload: false });
      }
    } catch (err) {
      console.log(err);
    }
  };
};
