import User from "src/interfaces/User";

export default interface ReducerType {
  auth: { user: User; loading: boolean; isSigned: boolean; error: string };
}
