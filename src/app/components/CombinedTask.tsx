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
    const [priority, setPriority] = useState<'None' | 'Low' | 'Medium' | 'High'>('None');
    const [priorityFilter, setPriorityFilter] = useState<'All' | 'None' | 'Low' | 'Medium' | 'High'>('All');
    const [filteredTasks, setFilteredTasks] = useState<Task[]>(tasks);
    const [isStrictMode, setIsStrictMode] = useState(false);

    useEffect(() => {
        setFilteredTasks(filterTasks(tasks, query, priorityFilter, isStrictMode));
    }, [tasks, query, isStrictMode, priorityFilter]);

    const handleSearchOrAdd = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (query.trim() && !tasks.some(task => task.text === query)) {
            addTask({ id: Date.now().toString(), text: query, completed: false, priority });
            setQuery('');
            setPriority('None');
        }
    };

    const toggleSearchMode = () => {
        setIsStrictMode(!isStrictMode);
    };

    const handlePriorityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setPriorityFilter(e.target.value as 'All' | 'None' | 'Low' | 'Medium' | 'High');
    };

    const handlePrioritySelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setPriority(e.target.value as 'None' | 'Low' | 'Medium' | 'High');
    };

    return (
        <>
            <div className="flex items-center mb-4">
                <form onSubmit={handleSubmit} className="flex-grow flex items-center">
                    <div className="flex items-center flex-grow relative">
                        <input
                            type="text"
                            value={query}
                            onChange={handleSearchOrAdd}
                            placeholder="Search or add a task"
                            className="flex-grow p-2 border-2 bg-[#40534C] text-white border-[#D6BD98] rounded-l-full"
                        />
                        <select
                            value={priority}
                            onChange={handlePrioritySelect}
                            className="px-2 py-[0.58rem] border-2 border-l-0 border-[#D6BD98] rounded-r-full bg-[#40534C] text-white"
                        >
                            <option value="None">None</option>
                            <option value="Low">Low</option>
                            <option value="Medium">Medium</option>
                            <option value="High">High</option>
                        </select>
                    </div>
                    <button type="submit" className="ml-2 p-2 border-2 border-blue-500 text-white rounded">
                        <PlusCircle />
                    </button>
                </form>
            </div>
            <div className="mb-4">
                <h2 className="text-xl text-[#D6BD98] mb-2">Filters</h2>
                <div className="flex items-center">
                    <select
                        value={priorityFilter}
                        onChange={handlePriorityChange}
                        className="p-2 border-2 border-gray-500 rounded"
                    >
                        <option value="All">All</option>
                        <option value="None">None</option>
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>
                    </select>
                    <button
                        onClick={toggleSearchMode}
                        className={`ml-2 p-2 rounded ${isStrictMode ? 'border-2 border-[#c0cfc8] text-white' : 'border-2 border-gray-500 text-white'}`}
                    >
                        {isStrictMode ? <EyeSolid /> : <Eye />}
                    </button>
                </div>
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
