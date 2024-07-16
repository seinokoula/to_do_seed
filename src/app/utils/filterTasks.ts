import { Task } from '../types/task';

export const filterTasks = (tasks: Task[], query: string): Task[] => {
    if (!query) return tasks;
    return tasks.filter(task => task.text.toLowerCase().includes(query.toLowerCase()));
};