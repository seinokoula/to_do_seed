# Todo List Application

This project is a Todo List application built with Next.js, React, and TypeScript.

## Features

- **Task Management**: Add, delete, and toggle the completion status of tasks.
- **Task Filtering**: Filter tasks based on priority and search queries.
- **Strict Mode**: Toggle strict mode to only show tasks that start with the search query.
- **Persistent State**: Synchronize the state with the browser's localStorage to ensure tasks are persistent across sessions.
- **Responsive UI**: A modern and responsive user interface built with Tailwind CSS and Framer Motion for animations.

## Technical Specifications

1. **React Context for State Management**:
   - The application uses React Context to manage the state of the task list and associated actions.
   - The context is defined in `src/app/context/TaskContext.tsx`.

2. **State Synchronization with localStorage**:
   - The state of the task list is synchronized with the browser's localStorage to ensure persistence.
   - This is achieved using a custom hook `useLocalStorage` defined in `src/app/hooks/useLocalStorage.ts`.

3. **TypeScript for Type Safety**:
   - The project maximizes the use of TypeScript to type various functions, components, and other parts of the code.
   - Task types are defined in `src/app/types/task.ts`.

4. **Component-Based Architecture**:
   - The interface is divided into distinct React components for better organization and reusability.
   - Key components include `CombinedTaskComponent`, `TaskItem`, and `ClearAllButton`.

5. **Best Practices in React**:
   - The project follows React best practices, including the use of hooks, functional components, and clean code principles.

## Project Structure

- **`src/app/components`**: Contains the React components used in the application.
  - `CombinedTaskComponent.tsx`: The main component that combines task management and filtering functionalities.
  - `TaskItem.tsx`: A component to display individual tasks.
  - `ClearAllButton.tsx`: A button to clear all tasks.

- **`src/app/context`**: Contains the context and provider for task management.
  - `TaskContext.tsx`: Defines the context, reducer, and provider for managing tasks.

- **`src/app/hooks`**: Contains custom hooks used in the application.
  - `useLocalStorage.ts`: A custom hook to synchronize state with localStorage.

- **`src/app/types`**: Contains TypeScript type definitions.
  - `task.ts`: Defines the `Task` interface.

- **`src/app/utils`**: Contains utility functions.
  - `filterTasks.ts`: A utility function to filter tasks based on query, priority, and strict mode.

- **`src/app`**: Contains the main application files.
  - `page.tsx`: The main page component that renders the application.
  - `layout.tsx`: Defines the root layout of the application.

- **`public`**: Contains public assets such as images and icons.

- **`styles`**: Contains global styles and Tailwind CSS configuration.

## Getting Started

To run the development server:

Install the dependencies
```
yarn
```

Run the development
```
yarn next dev
```