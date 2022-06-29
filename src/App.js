import "./App.css";
import { useState, useEffect } from "react";
import TaskInput from "./taskInput";
import Filters from "./filters";
import TasksList from "./tasksList";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// ALL | COMPLETED | NOT_COMPLETED
function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );
  const [filter, setFilter] = useState("ALL");

  function updateFilter(text) {
    setFilter(text);
  }

  function displayTasks() {
    switch (filter) {
      case "COMPLETE":
        return tasks.filter((task) => task.complete);
      case "NON_COMPLETE":
        return tasks.filter((task) => !task.complete);
      case "ALL":
      default:
        return tasks;
    }
  }

  const updateTasks = (input) => {
    setTasks((prevTasks) => [
      ...prevTasks,
      { text: input, complete: false, id: Math.random() },
    ]);
  };

  const checkDone = (id) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        task.complete = !task.complete;
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const removeTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  const uncheckAll = () => {
    const updatedTasks = tasks.map((task) => {
      task.complete = false;
      return task;
    });
    setTasks(updatedTasks);
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <Container className="App">
      <h1>My Todos</h1>
      <Row>
        <Col className="d-flex justify-content-end">
          <TaskInput updateTasks={updateTasks} />
        </Col>
        <Col className="d-flex justify-content-start align-items-center">
          <Filters updateFilter={updateFilter} uncheckAll={uncheckAll} />
        </Col>
      </Row>
      <Row>
        <Col>
          <TasksList
            checkDone={checkDone}
            removeTask={removeTask}
            tasks={tasks}
            displayTasks={displayTasks}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
