import { useContext } from "react";
import { TaskContext } from "../store/taskContext";

export default function Notifications() {
  const { notification } = useContext(TaskContext);

  if (!notification) return null;

  return (
    <div className={`notification ${notification.type}`}>
      {notification.message}
    </div>
  );
}
