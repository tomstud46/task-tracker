import React from "react";
import TaskItem from "./TaskItem";

export default function TaskList({ tasks }) {
  const activeTasks = tasks.filter((t) => !t.completed);
  const completedTasks = tasks.filter((t) => t.completed);

  return (
    <div className="task-lists">
      <h3>Active</h3>
      <ul className="active-list">{activeTasks.map((t) => <TaskItem key={t.id} task={t} />)}</ul>

      <h3>Completed</h3>
      <ul className="completed-list">{completedTasks.map((t) => <TaskItem key={t.id} task={t} />)}</ul>
    </div>
  );
}
