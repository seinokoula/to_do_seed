'use client';

import { useState, useEffect } from 'react';
import { useTasks } from '../context/TaskContext';
import TaskItem from './TaskItem';
import { Task } from '../types/task';
import { filterTasks } from '../utils/filterTasks';
import { motion, AnimatePresence } from 'framer-motion';
import { PlusCircle, Eye, EyeSolid } from 'iconoir-react';

const CombinedTaskComponent: React.FC = () => {
    const { tasks, addTask, toggleTaskCompletion, deleteTask } = useTasks();
    const [query, setQuery] = useState('');
    const [filteredTasks, setFilteredTasks] = useState<Task[]>(tasks);
    const [isStrictMode, setIsStrictMode] = useState(false);

    useEffect(() => {
        if (isStrictMode) {
            setFilteredTasks(tasks.filter(task => task.text.startsWith(query)));
        } else {
            setFilteredTasks(filterTasks(tasks, query));
        }
    }, [tasks, query, isStrictMode]);

    const handleSearchOrAdd = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (query.trim() && !tasks.some(task => task.text === query)) {
            addTask({ id: Date.now().toString(), text: query, completed: false });
            setQuery('');
        }
    };

    const toggleSearchMode = () => {
        setIsStrictMode(!isStrictMode);
    };

    return (
        <>
            <div className="flex items-center mb-4">
                <form onSubmit={handleSubmit} className="flex-grow flex items-center">
                    <input
                        type="text"
                        value={query}
                        onChange={handleSearchOrAdd}
                        placeholder="Search or add a task"
                        className="flex-grow p-2 border-2 bg-[#40534C] text-white border-[#D6BD98] rounded-full"
                    />
                    <button type="submit" className="ml-2 p-2 border-2 border-blue-500 text-white rounded">
                        <PlusCircle />
                    </button>
                </form>
                <button
                    onClick={toggleSearchMode}
                    className={`ml-2 p-2 rounded ${isStrictMode ? 'border-2 border-green-500 text-white' : 'border-2 border-gray-500 text-white'}`}
                >
                    {isStrictMode ? <EyeSolid /> : <Eye />}
                </button>
            </div>
            <motion.div layout className="mt-4">
                <AnimatePresence>
                    {filteredTasks.map((task: Task) => (
                        <TaskItem key={task.id} task={task} toggleTaskCompletion={toggleTaskCompletion} deleteTask={deleteTask} />
                    ))}
                </AnimatePresence>
            </motion.div>
        </>
    );
};

export default CombinedTaskComponent;
