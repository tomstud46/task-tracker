import React, { useContext } from "react";
import { TaskContext } from "../store/taskContext.jsx";

export default function Header() {
  const { darkMode, setDarkMode } = useContext(TaskContext);

  return (
    <header>
      <h1>📝 Task Tracker</h1>
      <button
        className="toggle-btn"
        onClick={() => setDarkMode(!darkMode)}
        title="Toggle Dark Mode"
      >
        {darkMode ? "☀️" : "🌙"}
      </button>
    </header>
  );
}
