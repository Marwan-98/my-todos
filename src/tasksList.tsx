import React from "react";
import Task from "./task";
import ListGroup from "react-bootstrap/ListGroup";
import displayTasks from "./Functions/displayTasks";
import { useTasks } from "./context/TasksProvider";
import { useFilter } from "./context/FilterProvider";

type Props = {};

const TasksList = (props: Props) => {
  const tasks = useTasks();
  const filter = useFilter();
  return (
    <ListGroup className="pt-3">
      {displayTasks!({ tasks, filter })!.map((task) => (
        <Task task={task} />
      ))}
    </ListGroup>
  );
};

export default TasksList;
