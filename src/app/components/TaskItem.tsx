import { Task } from '../types/task';
import { motion } from 'framer-motion';
import { Trash, CheckCircle, Circle } from 'iconoir-react';

interface TaskItemProps {
    task: Task;
    toggleTaskCompletion: (id: string) => void;
    deleteTask: (id: string) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, toggleTaskCompletion, deleteTask }) => {
    return (
        <motion.div
            className="flex items-center justify-between p-2 border-b-2 border-b-[#D6BD98]"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            layout
        >
            <p className={`flex-grow text-white ${task.completed ? 'line-through' : ''}`}>
                {task.text}
            </p>
            <div className="flex items-center">
                <button
                    onClick={() => toggleTaskCompletion(task.id)}
                    className="ml-2 p-2 border-2 border-gray-200 text-white rounded"
                >
                    {task.completed ? <CheckCircle /> : <Circle />}
                </button>
                <button
                    onClick={() => deleteTask(task.id)}
                    className="ml-2 p-2 border-2 border-red-500 text-white rounded"
                >
                    <Trash />
                </button>
            </div>
        </motion.div>
    );
};

export default TaskItem;
