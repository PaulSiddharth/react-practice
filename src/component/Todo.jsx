import { memo, useState, useCallback } from "react";

const Task = memo(({task, onRemove}) => {
    console.log("Rendering task:", task);
    return (
      <li className="flex justify-between py-2">
        <span>{task}</span>
        <button variant="destructive" onClick={onRemove}>Remove</button>
      </li>
    );
})

export default function TodoList() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = useCallback(() => {
    if (task.trim()) {
      setTasks((prevTasks) => [...prevTasks, task]);
      setTask("");
    }
  }, [task]);

  const removeTask = useCallback((index) => {
    setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
  }, []);

  return (
    <div className="flex flex-col items-center h-screen p-6">
          <h2 className="text-xl font-bold mb-4">To-Do List</h2>
          <div className="flex mb-4">
            <input
              type="text"
              placeholder="Enter task..."
              value={task}
              onChange={(e) => setTask(e.target.value)}
              className="mr-2"
            />
            <button onClick={addTask}>Add</button>
          </div>
          <ul>
          {tasks.map((t, index) => (
              <Task key={index} task={t} onRemove={() => removeTask(index)} />
            ))}
            {/* {tasks.map((t, index) => (
              <li key={index} className="flex justify-between py-2">
                <span>{t}</span>
                <button variant="destructive" onClick={() => removeTask(index)}>
                  Remove
                </button>
              </li>
            ))} */}
          </ul>

    </div>
  );
}
