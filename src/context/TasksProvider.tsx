import React, { useContext, useState } from "react";
import { appProps } from "../types/appProps";
import { task } from "../types/task";

const TasksContext = React.createContext<task[]>([]);
const UpdateTasksContext =
  React.createContext<React.Dispatch<any>>(dispatchEvent);

export const useTasks = () => {
  return useContext(TasksContext);
};

export const useUpdateTasks = () => {
  return useContext(UpdateTasksContext);
};

const TasksProvider = ({ value, children }: appProps) => {
  const [tasks, setTasks] = useState<task[]>(value || []);
  return (
    <TasksContext.Provider value={tasks}>
      <UpdateTasksContext.Provider value={setTasks}>
        {children}
      </UpdateTasksContext.Provider>
    </TasksContext.Provider>
  );
};

export default TasksProvider;
