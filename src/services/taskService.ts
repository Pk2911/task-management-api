import {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
} from "../repositories/taskRepository.js";

export function listTasks() {
  return getAllTasks();
}

export function findTask(id: number) {
  return getTaskById(id);
}

export function addTask(
  title: string,
  description: string,
  dueDate?: string,
) {
  const task = {
    id: Date.now(),
    title,
    description,
    completed: false,
    dueDate,
  };

  return createTask(task);
}

export function editTask(
  id: number,
  data: Partial<{
    title: string;
    description: string;
    completed: boolean;
    dueDate: string;
  }>,
) {
  return updateTask(id, data);
}

export function removeTask(id: number) {
  return deleteTask(id);
}

export function assignTask(id: number, userId: number) {
  return updateTask(id, { userId });
}