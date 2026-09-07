import bcrypt from "bcrypt";
import { createUser, getUserByEmail } from "../repositories/userRepository.js";

export async function registerUser(
  email: string,
  password: string,
) {
  const existingUser = getUserByEmail(email);

  if (existingUser) {
    throw new Error("User already exists");
  }

  const passwordHash = await bcrypt.hash(password, 10);

  const user = createUser({
    id: Date.now(),
    email,
    passwordHash,
    role: "member",
  });

  return user;
}