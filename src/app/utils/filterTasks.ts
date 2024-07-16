import { Task } from '../types/task';

export const filterTasks = (
    tasks: Task[],
    query: string,
    priority: 'All' | 'None' | 'Low' | 'Medium' | 'High',
    isStrictMode: boolean
): Task[] => {
    let filteredTasks = tasks;
    if (priority !== 'All') {
        filteredTasks = filteredTasks.filter(task => task.priority === priority);
    }
    if (!query) return filteredTasks;
    if (isStrictMode) {
        return filteredTasks.filter(task => task.text.toLowerCase().startsWith(query.toLowerCase()));
    }
    return filteredTasks.filter(task => task.text.toLowerCase().includes(query.toLowerCase()));
};
