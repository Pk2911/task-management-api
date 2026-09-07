import { authenticateToken } from "../middleware/authMiddleware.js";
import { Router } from "express";

import {
  getTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
  assignTaskToUser,
} from "../controllers/taskController.js";

import {
  createTaskSchema,
  updateTaskSchema,
  assignTaskSchema,
} from "../schemas/taskSchema.js";

import { validate } from "../middleware/validate.js";

const router = Router();

router.get("/tasks", authenticateToken, getTasks);

router.get("/tasks/:id", getTask);

router.post(
  "/tasks",
  validate(createTaskSchema),
  createTask,
);

router.patch(
  "/tasks/:id",
  validate(updateTaskSchema),
  updateTask,
);

router.delete("/tasks/:id", deleteTask);

router.patch(
  "/tasks/:id/assign",
  validate(assignTaskSchema),
  assignTaskToUser,
);

export default router;