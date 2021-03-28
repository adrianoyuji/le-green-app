import api from "src/services/api";
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

export const signIn = ({ history, email, password }: any) => async (
  dispatch: any
) => {
  dispatch(fetchUserRequest());
  try {
    const { data } = await api.post("/auth/signin", { email, password });
    dispatch(fetchUserSuccess(data.user));
    api.defaults.headers.authorization = `Bearer ${data.token}`;
    history.push("/dashboard");
  } catch (error) {
    dispatch(fetchUserFailure(error.response.data.message));
  }
};
