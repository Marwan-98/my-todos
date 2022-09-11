import React, { useContext, useState } from "react";

const TasksContext = React.createContext();
const UpdateTasksContext = React.createContext();

export const useTasks = () => {
  return useContext(TasksContext);
};

export const useUpdateTasks = () => {
  return useContext(UpdateTasksContext);
};

const TasksProvider = ({ value, children }) => {
  const [tasks, setTasks] = useState(value);
  return (
    <TasksContext.Provider value={tasks}>
      <UpdateTasksContext.Provider value={setTasks}>{children}</UpdateTasksContext.Provider>
    </TasksContext.Provider>
  );
};

export default TasksProvider
