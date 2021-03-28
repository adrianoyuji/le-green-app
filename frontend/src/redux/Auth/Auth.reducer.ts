import { Auth } from "./Auth.types";
import { AuthActionTypes } from "./Auth.types";

const initial_state = {
  user: null,
  isSigned: false,
  loading: false,
  error: "",
};

const UserReducer = (
  state: Auth = { ...initial_state },
  action: AuthActionTypes
) => {
  switch (action.type) {
    case "SET_USER":
      return { ...action.payload };

    case "REMOVE_USER":
      return { ...initial_state };

    case "FETCH_USER_REQUEST":
      return { ...state, loading: true };

    case "FETCH_USER_SUCCESS":
      return {
        loading: false,
        isSigned: true,
        user: { ...action.payload },
        error: "",
      };

    case "FETCH_USER_FAILURE":
      return {
        loading: false,
        isSigned: false,
        user: null,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default UserReducer;
