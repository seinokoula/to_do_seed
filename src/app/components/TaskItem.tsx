import { Task } from '../types/task';

interface TaskItemProps {
    task: Task;
    toggleTaskCompletion: (id: string) => void;
    deleteTask: (id: string) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, toggleTaskCompletion, deleteTask }) => {
    return (
        <div className="flex items-center justify-between p-2 border-b">
            <span className={`flex-grow ${task.completed ? 'line-through' : ''}`}>
                {task.text}
            </span>
            <div className="flex items-center">
                <button
                    onClick={() => toggleTaskCompletion(task.id)}
                    className="ml-2 p-2 bg-gray-200 rounded"
                >
                    {task.completed ? '✓' : '⏷'}
                </button>
                <button
                    onClick={() => deleteTask(task.id)}
                    className="ml-2 p-2 bg-red-500 text-white rounded"
                >
                    🗑️
                </button>
            </div>
        </div>
    );
};

export default TaskItem;
