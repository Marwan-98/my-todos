import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { ImPlus } from "react-icons/im";
import { useTasks, useUpdateTasks } from "./context/TasksProvider";
import updateTasks from "./Functions/updateTasks";

type Props = {};

const TaskInput = (props: Props) => {
  const [input, setInput] = useState("");
  const tasks = useTasks();
  const setTasks = useUpdateTasks();
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
          onClick={() => {
            updateTasks({ input, tasks, setTasks });
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
