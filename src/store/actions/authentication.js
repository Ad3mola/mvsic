import http from "../../HTTP/config";

export const login = () => {
  return async (dispatch) => {
    try {
      let response = await http.get("me");
      console.log("go");
      console.log(response.data);
      dispatch({ type: "LOGIN", payload: response.data });
    } catch (error) {
      console.log(error);
    }
  };
};
