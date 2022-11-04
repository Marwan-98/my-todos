import React from "react";
import { task } from "./task";

export type appProps = {
  id?: number;
  tasks?: task[];
  setTasks?: React.Dispatch<any>;
  value?: task[];
  children?: React.ReactNode;
  filter?: string;
  input?: string;
};
