import { Router } from "express";
import { register } from "../controllers/authController.js";
import { validate } from "../middleware/validate.js";
import { registerSchema } from "../schemas/authSchema.js";

const router = Router();

router.post("/signup", validate(registerSchema), register);

export default router;