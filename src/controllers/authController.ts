import type { Request, Response } from "express";
import { registerUser } from "../services/authService.js";

export async function register(req: Request, res: Response) {
  const { email, password } = req.body;

  const user = await registerUser(email, password);

  res.status(201).json({
    id: user.id,
    email: user.email,
    role: user.role,
  });
}