'use client';

import { useTasks } from '../context/TaskContext';
import { motion } from 'framer-motion';
import { Trash } from 'iconoir-react';


const ClearAllButton: React.FC = () => {
  const { clearTasks } = useTasks();

  return (
    <motion.button
      onClick={clearTasks}
      className="mt-4 p-2 bg-red-500 text-white rounded w-full"
      // whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.95 }}
    >
      <Trash className="inline-block mr-2" />
      Tout supprimer
    </motion.button>
  );
};

export default ClearAllButton;
