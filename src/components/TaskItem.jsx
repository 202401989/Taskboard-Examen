import { useDispatch } from "react-redux";
import { toggleTask, deleteTask } from "../redux/actions";

export default function TaskItem({ task }) {
  const dispatch = useDispatch();

  return (
    <li>
      <span
        style={{
          textDecoration: task.completada ? "line-through" : "none",
          cursor: "pointer"
        }}
        onClick={() => dispatch(toggleTask(task.id))}
      >
        {task.titulo}
      </span>
      <button onClick={() => dispatch(deleteTask(task.id))}>❌</button>
    </li>
  );
}
