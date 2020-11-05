import { shallowEqual, useSelector } from "react-redux";

let initialState = {
  go: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const useGlobalState = () => {
  return useSelector((state) => state, shallowEqual);
};

export default reducer;
