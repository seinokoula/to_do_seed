'use client';

import { useState, useEffect } from 'react';
import { useTasks } from '../context/TaskContext';
import TaskItem from './TaskItem';
import { Task } from '../types/task';
import { filterTasks } from '../utils/filterTasks';

const CombinedTaskComponent: React.FC = () => {
    const { tasks, addTask, toggleTaskCompletion } = useTasks();
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
                <form onSubmit={handleSubmit} className="flex-grow">
                    <input
                        type="text"
                        value={query}
                        onChange={handleSearchOrAdd}
                        placeholder="Search or add a task..."
                        className="flex-grow p-2 border rounded w-full"
                    />
                </form>
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

export default CombinedTaskComponent;
