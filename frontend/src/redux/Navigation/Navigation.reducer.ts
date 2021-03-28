import { Navigation, NavigationActionTypes } from "./Navigation.types";

const initial_state = {
  headerTitle: "Dashboard",
  isDrawerOpen: false,
};

const NavigationReducer = (
  state: Navigation = { ...initial_state },
  action: NavigationActionTypes
) => {
  switch (action.type) {
    case "TOGGLE_DRAWER":
      return { ...state, isDrawerOpen: !state.isDrawerOpen };
    case "SET_HEADER_TITLE":
      return { ...state, headerTitle: action.payload };
    default:
      return state;
  }
};

export default NavigationReducer;
