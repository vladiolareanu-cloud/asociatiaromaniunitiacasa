import { useState, useEffect } from "react";

const TaskManager = () => {
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState("");
  const [taskDesc, setTaskDesc] = useState("");

  // Încarcă taskurile din localStorage la mount
  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) setTasks(JSON.parse(storedTasks));
  }, []);

  // Salvează taskurile în localStorage la fiecare schimbare
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = () => {
    if (!taskName.trim()) return;
    const newTask = {
      id: Date.now(),
      name: taskName,
      description: taskDesc,
    };
    setTasks([...tasks, newTask]);
    setTaskName("");
    setTaskDesc("");
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Task Manager</h2>

      {/* Form */}
      <div className="flex flex-col gap-4 mb-6">
        <input
          type="text"
          placeholder="Task Name"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <textarea
          placeholder="Description"
          value={taskDesc}
          onChange={(e) => setTaskDesc(e.target.value)}
          className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        ></textarea>
        <button
          onClick={handleAddTask}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          Add Task
        </button>
      </div>

      {/* Task list */}
      <div className="flex flex-col gap-4">
        {tasks.length === 0 && (
          <p className="text-gray-500 text-center">Nu există taskuri.</p>
        )}
        {tasks.map((task) => (
          <div
            key={task.id}
            className="flex justify-between items-start border p-3 rounded shadow-sm"
          >
            <div className="flex-1">
              <h3 className="font-semibold text-lg">{task.name}</h3>
              <p className="text-gray-600">{task.description}</p>
            </div>
            <button
              onClick={() => handleDeleteTask(task.id)}
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition ml-4"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskManager;
