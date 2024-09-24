import { createStore } from "redux";

const initialState = {
  languageValue: "svenska",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_HEADER_VALUE":
      return {
        ...state,
        languageValue: action.payload,
      };
    default:
      return state;
  }
}

const store = createStore(reducer);

export default store;
