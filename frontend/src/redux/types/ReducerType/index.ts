import User from "src/interfaces/User";

export default interface ReducerType {
  auth: { user: User; loading: boolean };
}
