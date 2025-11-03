import { useSelector } from "react-redux";
import TaskItem from "./TaskItem";

export default function TaskList() {
  const tasks = useSelector((state) => state.tasks);

  // Contar tareas completadas
  const completedCount = tasks.filter(t => t.completada).length;

  return (
    <div>
      <ul>
        {tasks.map(task => (
          <TaskItem key={task.id} task={task} />
        ))}
      </ul>
      <p>✅ Tareas completadas: {completedCount}</p>
    </div>
  );
}
