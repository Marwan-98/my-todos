import { appProps } from "../types/appProps";

const uncheckAll = ({ tasks, setTasks }: appProps) => {
  const updatedTasks = tasks!.map((task) => {
    task.complete = false;
    return task;
  });
  setTasks!(updatedTasks);
};

export default uncheckAll;
