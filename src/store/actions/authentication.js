import http from "../../HTTP/config";

export const login = (props) => {
  return async (dispatch) => {
    try {
      let response = await http.get("me");
      dispatch({ type: "LOGIN", payload: response.data });
    } catch (error) {
      console.log(error);
    }
  };
};
