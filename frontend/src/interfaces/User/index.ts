import Membership from "src/interfaces/Membership";

export default interface User {
  _id: string;
  first_name: string;
  last_name: string;
  cpf?: string;
  email: string;
  vip: boolean;
  gender: Gender;
  created_at: Date;
  updated_at: Date;
  role: Role;
  address: Address;
  birthdate: Date;
  memberships?: Membership[];
}

interface Address {
  city?: string;
  state?: string;
  country?: string;
}
enum Role {
  ADMIN = "ADMIN",
  USER = "USER",
}
enum Gender {
  Masculino = "Masculino",
  Feminino = "Feminino",
  Outro = "Outro",
}
