import User from "src/interfaces/User";

export const setUser = (user: User) => {
  return {
    type: "SET_USER",
    payload: { ...user },
  };
};

export const removeUser = () => {
  return {
    type: "REMOVE_USER",
    payload: null,
  };
};

export const fetchUserRequest = () => {
  return {
    type: "FETCH_USER_REQUEST",
    payload: {},
  };
};

export const fetchUserSuccess = (user: User) => {
  return {
    type: "FETCH_USER_SUCCESS",
    payload: { ...user },
  };
};

export const fetchUserFailure = (error: string) => {
  return {
    type: "FETCH_USER_FAILURE",
    payload: error,
  };
};
