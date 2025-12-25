import React, { useState, useRef, useEffect, useContext } from "react"; 
import { TaskContext } from "../store/taskContext";

export default function TaskItem({ task }) {
  const { toggleTask, deleteTask, updateTaskText } = useContext(TaskContext); // add updateTaskText
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(task.text);
  const inputRef = useRef(null);

  // Focus input when editing
  useEffect(() => {
    if (isEditing && inputRef.current) inputRef.current.focus();
  }, [isEditing]);

  const handleSave = () => {
    if (editText.trim() !== "") {
      updateTaskText(task.id, editText.trim()); // update global state
    } else {
      setEditText(task.text); // revert if empty
    }
    setIsEditing(false);
  };

  const handleKey = (e) => {
    if (e.key === "Enter") handleSave();
    if (e.key === "Escape") {
      setEditText(task.text);
      setIsEditing(false);
    }
  };

  return (
    <li className={`task-item ${task.completed ? "completed" : ""} ${isEditing ? "editing" : ""}`}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTask(task.id)}
        title="Mark Completed"
      />

      {isEditing ? (
        <input
          ref={inputRef}
          className="task-edit-input"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          onBlur={handleSave}
          onKeyDown={handleKey}
        />
      ) : (
        <span
          className="task-text"
          onClick={() => setIsEditing(true)}
          title="Click to edit"
        >
          {task.text}
        </span>
      )}

      <button
        onClick={() => deleteTask(task.id)}
        title="Delete Task"
      >
        ✖
      </button>
    </li>
  );
}
