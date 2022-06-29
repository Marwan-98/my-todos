import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import { ImBin, ImCheckmark, ImCross } from "react-icons/im";

const Task = ({ task, checkDone, removeTask }) => {
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
            onClick={() => checkDone(task.id)}
            size={"sm"}
            variant={task.complete ? "warning" : "success"}
          >
            {task.complete ? <ImCross /> : <ImCheckmark />}
          </Button>
          <Button
            className="m-2"
            onClick={() => removeTask(task.id)}
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
