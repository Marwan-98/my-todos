import React from "react";
import "./App.css";
import { useEffect } from "react";
import TaskInput from "./taskInput";
import Filters from "./filters";
import TasksList from "./tasksList";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useTasks } from "./context/TasksProvider";

// ALL | COMPLETED | NOT_COMPLETED

interface Props extends React.HTMLAttributes<HTMLDivElement> {}

const App = (props: Props): JSX.Element => {
  const tasks = useTasks();

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <Container className="App">
      <h1>My Todos</h1>
      <Row>
        <Col className="d-flex justify-content-end">
          <TaskInput />
        </Col>
        <Col className="d-flex justify-content-start align-items-center">
          <Filters />
        </Col>
      </Row>
      <Row>
        <Col>
          <TasksList />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
