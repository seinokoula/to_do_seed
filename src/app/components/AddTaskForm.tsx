'use client';

import { useState } from 'react';
import { useTasks } from '../context/TaskContext';

const AddTaskForm: React.FC = () => {
    const [taskText, setTaskText] = useState('');
    const { addTask } = useTasks();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (taskText.trim()) {
            addTask({ id: Date.now().toString(), text: taskText, completed: false });
            setTaskText('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex items-center mb-4">
            <input
                type="text"
                value={taskText}
                onChange={(e) => setTaskText(e.target.value)}
                placeholder="Add a task..."
                className="flex-grow p-2 border rounded"
            />
            <button type="submit" className="ml-2 p-2 bg-blue-500 text-white rounded">
                +
            </button>
        </form>
    );
};

export default AddTaskForm;
