import { useState, useContext } from "react";
import { TaskContext } from "../store/taskContext";

export default function TaskInput() {
  const [text, setText] = useState("");
  const [shake, setShake] = useState(false);
  const { addTask } = useContext(TaskContext);

  const handleAdd = () => {
    if (!text.trim()) {
      setShake(true);
      setTimeout(() => setShake(false), 400);
      addTask(""); // triggers notification (existing logic)
      return;
    }

    addTask(text);
    setText("");
  };

  return (
    <div className={`task-input ${shake ? "shake" : ""}`}>
      <input
        type="text"
        placeholder="Enter a task..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleAdd()}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}
