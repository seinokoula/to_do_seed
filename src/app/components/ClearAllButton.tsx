'use client';

import { useTasks } from '../context/TaskContext';

const ClearAllButton: React.FC = () => {
  const { clearTasks } = useTasks();

  return (
    <button
      onClick={clearTasks}
      className="mt-4 p-2 bg-red-500 text-white rounded w-full"
    >
      Delete all tasks
    </button>
  );
};

export default ClearAllButton;
