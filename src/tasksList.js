import Task from "./task";
import ListGroup from "react-bootstrap/ListGroup";

const TasksList = ({ displayTasks, removeTask, checkDone }) => {
  return (
    <ListGroup className="pt-3">
      {displayTasks().map((task) => (
        <Task task={task} checkDone={checkDone} removeTask={removeTask} />
      ))}
    </ListGroup>
  );
};

export default TasksList;
