import type { Task } from "../types/task.js";

const tasks: Task[] = [];

export function getAllTasks(): Task[] {
  return tasks;
}

export function getTaskById(id: number): Task | undefined {
  return tasks.find((task) => task.id === id);
}

export function createTask(task: Task): Task {
  tasks.push(task);
  return task;
}

export function updateTask(id: number, data: Partial<Task>): Task | undefined {
  const task = getTaskById(id);

  if (!task) {
    return undefined;
  }

  Object.assign(task, data);
  return task;
}

export function deleteTask(id: number): boolean {
  const index = tasks.findIndex((task) => task.id === id);

  if (index === -1) {
    return false;
  }

  tasks.splice(index, 1);
  return true;
}