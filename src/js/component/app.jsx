import React, { useState } from "react";
import TodoList from "./todoList";
import Input from "./input";

const App = () => {
  const [tasks, setTasks] = useState([]);

  // Para agregar una tarea
  const addTask = (newTask) => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, { text: newTask, id: Date.now() }]);
    }
  };

  // Para eliminar una tarea
  const removeTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className="app-container">
      <h1>Lista de Tareas</h1>
      <Input addTask={addTask} />

      <TodoList tasks={tasks} removeTask={removeTask} />
        {/* Contador de tareas */}
      <p>{tasks.length} {tasks.length === 1 ? "tarea" : "tareas"} pendientes</p>


    </div>
  );
};

export default App;
