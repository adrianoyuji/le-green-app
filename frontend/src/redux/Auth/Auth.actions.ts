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
