import { createContext, useState, useEffect } from "react";

export const TaskContext = createContext();

export function TaskProvider({ children }) {
  /* =========================
     TASK STATE
  ========================= */
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  /* =========================
     DARK MODE STATE
  ========================= */
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("darkMode");
    return saved ? JSON.parse(saved) : false;
  });

  /* 🔔 SINGLE NOTIFICATION */
  const [notification, setNotification] = useState(null);

  /* =========================
     SIDE EFFECTS
  ========================= */
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    document.body.className = darkMode ? "dark" : "";
  }, [darkMode]);

  /* ⏱ AUTO HIDE NOTIFICATION */
  useEffect(() => {
    if (!notification) return;

    const timer = setTimeout(() => {
      setNotification(null);
    }, 1500);

    return () => clearTimeout(timer);
  }, [notification]);

  /* =========================
     TASK FUNCTIONS
  ========================= */
  const addTask = (text) => {
    if (!text.trim()) {
      setNotification({
        type: "error",
        message: "Task cannot be empty!",
      });
      return;
    }

    setTasks((prev) => [
      ...prev,
      { id: Date.now(), text: text.trim(), completed: false },
    ]);

    setNotification({
      type: "success",
      message: "Task added successfully!",
    });
  };

  const toggleTask = (id) => {
    setTasks((prev) =>
      prev.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  const updateTaskText = (id, newText) => {
    setTasks((prev) =>
      prev.map((t) =>
        t.id === id ? { ...t, text: newText } : t
      )
    );
  };

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  const clearNotification = () => {
    setNotification(null);
  };

  /* =========================
     PROVIDER
  ========================= */
  return (
    <TaskContext.Provider
      value={{
        tasks,
        addTask,
        toggleTask,
        updateTaskText,
        deleteTask,
        darkMode,
        setDarkMode,
        notification,
        clearNotification,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}
