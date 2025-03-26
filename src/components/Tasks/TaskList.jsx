import React, { useState } from 'react'

function TaskList({ tasks, removeTask, updateTask }) {
  const [editIndex, setEditIndex] = useState(null);
  const [editText, setEditText] = useState("");
  const [editPriority, setEditPriority] = useState("Low");

  const handleUpdate = (index) => {
    updateTask(index, editText, editPriority);
    setEditIndex(null);
    setEditText("");
    setEditPriority("Low");
  };

  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index} className="p-2 border-b flex justify-between items-center">
          {editIndex === index ? (
            <>
              <input
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                className="border p-1 rounded"
              />
              <select
                value={editPriority}
                onChange={(e) => setEditPriority(e.target.value)}
                className="border p-1 rounded"
              >
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="Urgent">Urgent</option>
              </select>
            </>
          ) : (
            <span>{task.text} - <strong>{task.priority}</strong></span>
          )}
          <div className="flex gap-2">
            {editIndex === index ? (
              <button
                onClick={() => handleUpdate(index)}
                className="bg-green-500 text-white px-2 py-1 rounded"
              >
                Save
              </button>
            ) : (
              <button
                onClick={() => { setEditIndex(index); setEditText(task.text); setEditPriority(task.priority); }}
                className="bg-yellow-500 text-white px-2 py-1 rounded"
              >
                Edit
              </button>
            )}
            <button
              onClick={() => removeTask(index)}
              className="bg-red-500 text-white px-2 py-1 rounded"
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default TaskList