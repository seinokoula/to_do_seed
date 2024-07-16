'use client';

import CombinedTaskComponent from './components/CombinedTask';
import ClearAllButton from './components/ClearAllButton';
import { TaskProvider } from './context/TaskContext';

const Page: React.FC = () => {
  return (
    <div className='bg-[#40534C] min-h-screen'>
    <TaskProvider>
      <div className="container mx-auto p-4">
        <h1 className="text-7xl font-bold mb-4 text-center text-[#D6BD98]">Todo List</h1>
        <CombinedTaskComponent />
        <ClearAllButton />
      </div>
    </TaskProvider>
    </div>
  );
};

export default Page;
