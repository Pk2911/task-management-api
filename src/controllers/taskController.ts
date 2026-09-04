import type { Request, Response } from "express";

import {
  listTasks,
  findTask,
  addTask,
  editTask,
  removeTask,
  assignTask,
} from "../services/taskService.js";

import { AppError } from "../middleware/errorHandler.js";

export function getTasks(req: Request, res: Response) {
  const tasks = listTasks();

  res.json(tasks);
}

export function getTask(req: Request, res: Response) {
  const id = Number(req.params.id);

  const task = findTask(id);

  if (!task) {
    throw new AppError("Task not found", 404);
  }

  res.json(task);
}

export function createTask(req: Request, res: Response) {
  const { title, description, dueDate } = req.body;

  const task = addTask(title, description, dueDate);

  res.status(201).json(task);
}

export function updateTask(req: Request, res: Response) {
  const id = Number(req.params.id);

  const task = editTask(id, req.body);

  if (!task) {
    throw new AppError("Task not found", 404);
  }

  res.json(task);
}

export function deleteTask(req: Request, res: Response) {
  const id = Number(req.params.id);

  const deleted = removeTask(id);

  if (!deleted) {
    throw new AppError("Task not found", 404);
  }

  res.status(204).send();
}

export function assignTaskToUser(req: Request, res: Response) {
  const taskId = Number(req.params.id);
  const userId = Number(req.body.userId);

  const task = assignTask(taskId, userId);

  if (!task) {
    throw new AppError("Task not found", 404);
  }

  res.json(task);
}