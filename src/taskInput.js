import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { ImPlus } from "react-icons/im";

const TaskInput = ({ updateTasks }) => {
  const [input, setInput] = useState("");
  return (
    <div>
      <InputGroup className="my-3">
        <Form.Control
          placeholder="Add Todo"
          aria-label="Add Todo"
          aria-describedby="basic-addon1"
          type="text"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
        <Button
          xs={5}
          onClick={() => {
            updateTasks(input);
            setInput("");
          }}
        >
          <ImPlus />
        </Button>
      </InputGroup>
    </div>
  );
};

export default TaskInput;
