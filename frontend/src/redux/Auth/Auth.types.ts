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
  user: User | null;
  loading: boolean;
  isSigned: boolean;
  error: string;
}

export type AuthActionTypes = SetUser | RemoveUser;
