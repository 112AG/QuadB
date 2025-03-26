import { useEffect, useState } from "react";
import TaskInput from "../Tasks/TaskInput";
import TaskList from "../Tasks/TaskList";
import CurrentDate from "../Date/CurrentDate";
import WeatherApp from "../Weather/WeatherApp";
import { getTasksFromStorage, saveTasksToStorage } from "../../utils/LocalStorage";

 function TodoApp()  {
  const [tasks, setTasks] = useState(getTasksFromStorage());

  useEffect(() => {


    saveTasksToStorage(tasks);
  }, [tasks]);

  const addTask = (task, priority) => {
    const newTasks = [...tasks, { text: task, priority }];
    setTasks(newTasks);
  };

  const removeTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const updateTask = (index, newTask, newPriority) => {
    const updatedTasks = [...tasks];
    updatedTasks[index] = { text: newTask, priority: newPriority };
    setTasks(updatedTasks);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 border rounded shadow">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">Todo List</h1>
        <CurrentDate />
      </div>
      <TaskInput addTask={addTask} />
      <TaskList tasks={tasks} removeTask={removeTask} updateTask={updateTask} />
    </div>
  );
}

export default TodoApp;