import { appProps } from "../types/appProps";

const removeTask = ({ id, tasks, setTasks }: appProps) => {
  const updatedTasks = tasks!.filter((task) => task.id !== id);
  setTasks!(updatedTasks);
};

export default removeTask;
