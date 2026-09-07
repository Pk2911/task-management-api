import bcrypt from "bcrypt";
import { createUser, getUserByEmail } from "../repositories/userRepository.js";
import { AppError } from "../middleware/errorHandler.js";

export async function registerUser(
  email: string,
  password: string,
) {
  const existingUser = getUserByEmail(email);

  if (existingUser) {
    throw new AppError("User already exists", 409);
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

export async function loginUser(
  email: string,
  password: string,
) {
  const user = getUserByEmail(email);

  if (!user) {
    throw new AppError("Invalid email or password", 401);
  }

  const passwordMatches = await bcrypt.compare(
    password,
    user.passwordHash,
  );

  if (!passwordMatches) {
    throw new AppError("Invalid email or password", 401);
  }

  return user;
}