import type { Request, Response } from "express";
import {
  loginUser,
  registerUser,
} from "../services/authService.js";

export async function register(
  req: Request,
  res: Response,
) {
  const { email, password } = req.body;

  const user = await registerUser(email, password);

  res.status(201).json({
    id: user.id,
    email: user.email,
    role: user.role,
  });
}

export async function login(
  req: Request,
  res: Response,
) {
  const { email, password } = req.body;

  const { user, accessToken } = await loginUser(
    email,
    password,
  );

  res.json({
    id: user.id,
    email: user.email,
    role: user.role,
    accessToken,
  });
}