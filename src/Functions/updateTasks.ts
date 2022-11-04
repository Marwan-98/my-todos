import { appProps } from "../types/appProps";
import { task } from "../types/task";

const updateTasks = ({ input, setTasks }: appProps) => {
  setTasks!((prevTasks: task[]) => [
    ...prevTasks,
    { text: input, complete: false, id: Math.random() },
  ]);
};

export default updateTasks;
