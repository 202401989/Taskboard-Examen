import { useDispatch } from "react-redux";
import { addTask } from "../redux/actions";

export default function TaskForm() {
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    const titulo = e.target.titulo.value;
    dispatch(addTask({ id: Date.now(), titulo, completada: false }));
    e.target.reset();
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="titulo" placeholder="Nueva tarea" required />
      <button type="submit">Agregar</button>
    </form>
  );
}
