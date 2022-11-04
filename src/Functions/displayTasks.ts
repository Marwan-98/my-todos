import { appProps } from "../types/appProps";

const displayTasks = ({ tasks, filter }: appProps) => {
  switch (filter) {
    case "COMPLETE":
      return tasks!.filter((task) => task.complete);
    case "NON_COMPLETE":
      return tasks!.filter((task) => !task.complete);
    case "ALL":
    default:
      return tasks;
  }
};

export default displayTasks;
