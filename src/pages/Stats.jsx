import React, { useContext } from "react";
import { TaskContext } from "../store/taskContext";

export default function Stats() {
  const { tasks, darkMode, setDarkMode } = useContext(TaskContext);

  const total = tasks.length;
  const completed = tasks.filter((t) => t.completed).length;
  const remaining = total - completed;

  return (
    <div className="stats-page">
      <div className="stats-header">
        <button
          className="toggle-btn"
          onClick={() => setDarkMode(!darkMode)}
          title="Toggle Dark Mode"
        >
          {darkMode ? "☀️" : "🌙"}
        </button>
      </div>

      <h2>Task Statistics</h2>
      <p>Total Tasks: {total}</p>
      <p>Completed: {completed}</p>
      <p>Remaining: {remaining}</p>
    </div>
  );
}
