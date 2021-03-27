import Membership from "src/interfaces/Membership";

export default interface User {
  id?: string | null;
  first_name: string | null;
  last_name: string | null;
  cpf?: string | null;
  email: string | null;
  vip: boolean | null;
  gender: Gender | null;
  created_at: Date | null;
  updated_at: Date | null;
  role: Role | null;
  address: Address | null;
  birthdate: Date | null;
  authorized: boolean;
  memberships?: Membership[];
}

interface Address {
  city?: string;
  state?: string;
  coutry?: string;
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
