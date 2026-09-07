import type { User } from "../types/user.js";

const users: User[] = [];

export function getUserByEmail(email: string): User | undefined {
  return users.find((user) => user.email === email);
}

export function getUserById(id: number): User | undefined {
  return users.find((user) => user.id === id);
}

export function createUser(user: User): User {
  users.push(user);
  return user;
}