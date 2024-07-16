'use client';

import { useState, useEffect } from 'react';
import { useTasks } from '../context/TaskContext';
import TaskItem from './TaskItem';
import { Task } from '../types/task';
import { filterTasks } from '../utils/filterTasks';

const TaskList: React.FC = () => {
    const { tasks, toggleTaskCompletion } = useTasks();
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

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
    };

    const toggleSearchMode = () => {
        setIsStrictMode(!isStrictMode);
    };

    return (
        <>
            <div className="flex items-center mb-4">
                <input
                    type="text"
                    value={query}
                    onChange={handleSearch}
                    placeholder="Search a task..."
                    className="flex-grow p-2 border rounded"
                />
                <button
                    onClick={toggleSearchMode}
                    className={`ml-2 p-2 rounded ${isStrictMode ? 'bg-green-500 text-white' : 'bg-gray-500 text-white'}`}
                >
                    {isStrictMode ? 'Strict Mode' : 'Classic Mode'}
                </button>
            </div>
            <div className="mt-4">
                {filteredTasks.map((task: Task) => (
                    <TaskItem key={task.id} task={task} toggleTaskCompletion={toggleTaskCompletion} />
                ))}
            </div>
        </>
    );
};

export default TaskList;
