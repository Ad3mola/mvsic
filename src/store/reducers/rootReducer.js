import { shallowEqual, useSelector } from "react-redux";

let initialState = {};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export const useGlobalState = () => {
  return useSelector((state) => state, shallowEqual);
};

export default reducer;
