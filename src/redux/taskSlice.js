// features/tasks/tasksSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: [
    { id: 1, title: 'Hacer tarea de matemáticas', completed: false },
    { id: 2, title: 'Estudiar para el examen de ciencias', completed: false },
    { id: 3, title: 'Limpiar mi habitación', completed: false },
  ],
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      const newTask = {
        id: Date.now(),
        title: action.payload,
        completed: false,
      };
      state.tasks.push(newTask);
    },
    toggleTask: (state, action) => {
      const task = state.tasks.find(t => t.id === action.payload);
      if (task) task.completed = !task.completed;
    },
    removeTask: (state, action) => {
      state.tasks = state.tasks.filter(t => t.id !== action.payload);
    },
  },
});

export const { addTask, toggleTask, removeTask } = tasksSlice.actions;
export default tasksSlice.reducer;

