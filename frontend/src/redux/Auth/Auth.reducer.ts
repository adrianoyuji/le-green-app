import { Auth } from "./Auth.types";
import { AuthActionTypes } from "./Auth.types";

const initial_state = {
  user: {
    id: null,
    first_name: null,
    last_name: null,
    cpf: null,
    email: null,
    vip: false,
    gender: null,
    created_at: null,
    updated_at: null,
    role: null,
    address: {},
    birthdate: null,
    authorized: false,
    memberships: [],
  },
  loading: false,
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
    default:
      return state;
  }
};

export default UserReducer;
