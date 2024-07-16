import { Task } from '../types/task';

interface TaskItemProps {
    task: Task;
    toggleTaskCompletion: (id: string) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, toggleTaskCompletion }) => {
    return (
        <div className="flex items-center justify-between p-2 border-b">
            <span className={`flex-grow ${task.completed ? 'line-through' : ''}`}>
                {task.text}
            </span>
            <button
                onClick={() => toggleTaskCompletion(task.id)}
                className="ml-2 p-2 bg-gray-200 rounded"
            >
                {task.completed ? '✓' : '⏷'}
            </button>
        </div>
    );
};

export default TaskItem;
