import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import { ImBin, ImCheckmark, ImCross } from "react-icons/im";
import checkDone from "./Functions/checkDone";
import removeTask from "./Functions/removeTask";
import { useTasks, useUpdateTasks } from "./context/TasksProvider";
import { task } from "./types/task";

type Props = {
  task: task;
};

const Task = ({ task }: Props) => {
  const tasks = useTasks();
  const setTasks = useUpdateTasks();

  return (
    <div className="list justify-content-center" key={task.id}>
      <ListGroup.Item
        className={`d-flex justify-content-between align-items-center w-75 m-1 ${
          task.complete ? "line-through" : ""
        }`}
        variant={task.complete ? "secondary" : "light"}
      >
        <div>{task.text}</div>
        <div>
          <Button
            className="m-2"
            onClick={() => checkDone({ id: task.id, tasks: tasks, setTasks })}
            size={"sm"}
            variant={task.complete ? "warning" : "success"}
          >
            {task.complete ? <ImCross /> : <ImCheckmark />}
          </Button>
          <Button
            className="m-2"
            onClick={() => removeTask({ id: task.id, tasks, setTasks })}
            size={"sm"}
            variant="danger"
          >
            <ImBin />
          </Button>
        </div>
      </ListGroup.Item>
    </div>
  );
};

export default Task;
