import React, { useState } from 'react'

function TaskInput({ addTask }) {
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("Low");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      addTask(task, priority);
      setTask("");
      setPriority("Low");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mt-4">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a task"
        className="border p-2 rounded w-full"
      />
      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        className="border p-2 rounded"
      >
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="Urgent">Urgent</option>
      </select>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Add
      </button>
    </form>
  );
}
export default TaskInput