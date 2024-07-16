'use client';

import CombinedTaskComponent from './components/CombinedTask';
import ClearAllButton from './components/ClearAllButton';
import { TaskProvider } from './context/TaskContext';

const Page: React.FC = () => {
  return (
    <TaskProvider>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Todo List</h1>
        <CombinedTaskComponent />
        <ClearAllButton />
      </div>
    </TaskProvider>
  );
};

export default Page;
