import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { TaskProvider } from "./store/taskContext.jsx";
import "./styles/global.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <TaskProvider>
    <App />
  </TaskProvider>
);
