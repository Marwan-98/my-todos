import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import FilterProvider from "./context/FilterProvider";
import TasksProvider from "./context/TasksProvider";

const root = ReactDOM.createRoot(document.getElementById("root")!);

export const ToDosContext = React.createContext({});

root.render(
  <TasksProvider
    value={
      localStorage.getItem("tasks")
        ? JSON.parse(localStorage.getItem("tasks")!)
        : []
    }
  >
    <FilterProvider value={"ALL"}>
      <App className="bg-dark" />
    </FilterProvider>
  </TasksProvider>
);
