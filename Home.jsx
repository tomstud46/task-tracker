import React, { useContext } from "react";
import Header from "../components/Header";
import TaskInput from "../components/TaskInput";
import TaskList from "../components/TaskList";
import { TaskContext } from "../store/taskContext";

export default function Home() {
  const { tasks } = useContext(TaskContext);

  return (
    <div className="home-page">
      <Header />
      <TaskInput />
      <TaskList tasks={tasks} />
    </div>
  );
}
