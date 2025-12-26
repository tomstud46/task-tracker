import { useContext } from "react";
import { TaskContext } from "../store/taskContext";

export default function DarkToggle() {
  const { darkMode, setDarkMode } = useContext(TaskContext);

  return (
    <button
      className={`toggle ${darkMode ? "dark" : ""}`}
      onClick={() => setDarkMode(!darkMode)}
      role="switch"
      aria-checked={darkMode}
      aria-label="Toggle dark mode"
    >
      <span className="ball" />
    </button>
  );
}
