import { Provider } from "react-redux";
import store from "./redux/store";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

export default function App() {
  return (
    <Provider store={store}>
      <div style={{ margin: "20px" }}>
        <h1>🗂️ TaskBoard</h1>
        <TaskForm />
        <TaskList />
      </div>
    </Provider>
  );
}
