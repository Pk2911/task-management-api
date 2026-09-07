import { Router } from "express";

import {
  login,
  logout,
  refresh,
  register,
} from "../controllers/authController.js";

import { validate } from "../middleware/validate.js";
import { loginLimiter } from "../middleware/rateLimiter.js";

import {
  loginSchema,
  refreshTokenSchema,
  registerSchema,
} from "../schemas/authSchema.js";

const router = Router();

router.post(
  "/signup",
  validate(registerSchema),
  register,
);

router.post(
  "/login",
  loginLimiter,
  validate(loginSchema),
  login,
);

router.post(
  "/refresh",
  validate(refreshTokenSchema),
  refresh,
);

router.post(
  "/logout",
  validate(refreshTokenSchema),
  logout,
);

export default router;