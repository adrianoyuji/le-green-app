import mongoose, { Document, Schema } from "mongoose";

interface IUser extends Document {
  _id: string;
  first_name: string;
  last_name: string;
  cpf: string;
  email: string;
  vip: boolean;
  gender: Gender;
  created_at: Date;
  updated_at: Date;
  role: Role;
  address: Address;
  birthdate: Date;
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

const UserSchema: Schema = new Schema(
  {
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    cpf: { type: String, required: true },
    email: { type: String, required: true },
    vip: { type: Boolean, required: true },
    gender: {
      type: String,
      enum: [Gender.Masculino, Gender.Feminino, Gender.Outro],
      required: true,
    },
    role: {
      type: String,
      enum: [Role.ADMIN, Role.USER],
      required: true,
    },
    address: {
      city: { type: String },
      state: { type: String },
      country: { type: String },
    },
    birthdate: { type: Date },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.models.User ||
  mongoose.model<IUser>("User", UserSchema);
