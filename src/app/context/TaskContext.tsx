'use client';

import React, { createContext, useReducer, useEffect, ReactNode, useContext } from 'react';
import { Task } from '../types/task';
import { useLocalStorage } from '../hooks/useLocalStorage';

interface TaskContextProps {
    tasks: Task[];
    addTask: (task: Task) => void;
    toggleTaskCompletion: (id: string) => void;
    deleteTask: (id: string) => void;
    clearTasks: () => void;
}

const TaskContext = createContext<TaskContextProps | undefined>(undefined);

const taskReducer = (state: Task[], action: any) => {
    switch (action.type) {
        case 'ADD_TASK':
            return [...state, action.payload];
        case 'TOGGLE_TASK':
            return state.map(task =>
                task.id === action.payload ? { ...task, completed: !task.completed } : task
            );
        case 'DELETE_TASK':
            return state.filter(task => task.id !== action.payload);
        case 'CLEAR_TASKS':
            return [];
        case 'INIT':
            return action.payload;
        default:
            return state;
    }
};

export const TaskProvider = ({ children }: { children: ReactNode }) => {
    const [storedTasks, setStoredTasks] = useLocalStorage<Task[]>('tasks', []);
    const [tasks, dispatch] = useReducer(taskReducer, []);

    useEffect(() => {
        if (storedTasks.length) {
            dispatch({ type: 'INIT', payload: storedTasks });
        }
    }, [storedTasks]);

    useEffect(() => {
        setStoredTasks(tasks);
    }, [tasks, setStoredTasks]);

    const addTask = (task: Task) => dispatch({ type: 'ADD_TASK', payload: task });
    const toggleTaskCompletion = (id: string) => dispatch({ type: 'TOGGLE_TASK', payload: id });
    const deleteTask = (id: string) => dispatch({ type: 'DELETE_TASK', payload: id });
    const clearTasks = () => dispatch({ type: 'CLEAR_TASKS' });

    return (
        <TaskContext.Provider value={{ tasks, addTask, toggleTaskCompletion, deleteTask, clearTasks }}>
            {children}
        </TaskContext.Provider>
    );
};

export const useTasks = () => {
    const context = useContext(TaskContext);
    if (!context) {
        throw new Error('useTasks must be used within a TaskProvider');
    }
    return context;
};
