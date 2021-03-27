import User from "src/interfaces/User";

export interface SetUser {
  type: string;
  payload: User;
}
export interface RemoveUser {
  type: string;
  payload: null;
}

export interface Auth {
  user: User;
  loading: boolean;
}

export type AuthActionTypes = SetUser | RemoveUser;
