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
            whileTap={{ scale: 0.95 }}
            style={{ backgroundColor: task.completed ? '#313e39' : 'transparent' }}
            transition={{ duration: 0.3 }}
        >
            <motion.p
                className={`flex-grow text-white ${task.completed ? 'line-through' : ''}`}
                animate={{ backgroundColor: task.completed ? '#313e39' : 'transparent' }}
                transition={{ duration: 0.3 }}
            >
                {task.text} <span className="text-sm text-gray-400">({task.priority})</span>
            </motion.p>
            <div className="flex items-center">
                <motion.button
                    onClick={() => toggleTaskCompletion(task.id)}
                    className="ml-2 p-2 border-2 border-gray-200 text-white rounded"
                    whileHover={{ scale: 1.1 }}
                >
                    {task.completed ? <CheckCircle /> : <Circle />}
                </motion.button>
                <motion.button
                    onClick={() => deleteTask(task.id)}
                    className="ml-2 p-2 border-2 border-[#BF3131] text-white rounded"
                    whileHover={{ scale: 1.1 }}
                >
                    <Trash />
                </motion.button>
            </div>
        </motion.div>
    );
};

export default TaskItem;
