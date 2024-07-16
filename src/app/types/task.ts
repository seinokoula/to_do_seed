export interface Task {
    id: string;
    text: string;
    completed: boolean;
    priority: 'None' | 'Low' | 'Medium' | 'High';
}
