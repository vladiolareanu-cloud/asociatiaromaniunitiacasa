// pages/taskmanager.js
import { useState, useEffect } from "react";

const BIN_ID = "6972568cae596e708fedf5af";
const MASTER_KEY = "$2a$10$uVCWIzoaU.NfpWq9SZnq8u5ktEdeEHVyVPpl9wZb3CUi5joXj09lC";

export default function TaskManager() {
  const [tasks, setTasks] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  // preluăm taskurile de la jsonbin
  const fetchTasks = async () => {
    try {
      setLoading(true);
      const res = await fetch(`https://api.jsonbin.io/v3/b/${BIN_ID}/latest`, {
        headers: {
          "X-Master-Key": MASTER_KEY,
        },
      });
      const data = await res.json();
      setTasks(data.record || []);
      setLoading(false);
    } catch (err) {
      console.error("Fetch error:", err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  // actualizăm bin-ul
  const updateBin = async (updatedTasks) => {
    try {
      const res = await fetch(`https://api.jsonbin.io/v3/b/${BIN_ID}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "X-Master-Key": MASTER_KEY,
        },
        body: JSON.stringify(updatedTasks),
      });
      return res.ok;
    } catch (err) {
      console.error("Update error:", err);
      return false;
    }
  };

  // adaugăm task
  const addTask = async () => {
    if (!name || !description) return alert("Completați toate câmpurile!");
    const newTask = { name, description };
    const updatedTasks = [...tasks, newTask]; // adăugăm după primul task permanent
    const success = await updateBin(updatedTasks);
    if (success) {
      setTasks(updatedTasks);
      setName("");
      setDescription("");
    } else {
      alert("Eroare la salvarea task-ului!");
    }
  };

  // ștergem task (nu se poate șterge primul task permanent)
  const deleteTask = async (index) => {
    if (index === 0) return; // primul task e permanent
    const updatedTasks = tasks.filter((_, i) => i !== index);
    const success = await updateBin(updatedTasks);
    if (success) setTasks(updatedTasks);
    else alert("Eroare la ștergere!");
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Task Manager</h1>

      {/* Form */}
      <div className="mb-6 flex flex-col gap-3">
        <input
          type="text"
          placeholder="Task Name"
          className="border p-2 rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <textarea
          placeholder="Description"
          className="border p-2 rounded"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={addTask}
        >
          Add Task
        </button>
      </div>

      {/* Lista Taskuri */}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="flex flex-col gap-4">
          {tasks.slice(1).map((task, index) => (
            <div
              key={index + 1}
              className="border p-4 rounded flex justify-between items-start gap-4"
            >
              <div>
                <h3 className="font-bold text-lg">{task.name}</h3>
                <p>{task.description}</p>
              </div>
              <button
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                onClick={() => deleteTask(index + 1)} // +1 deoarece index 0 e permanent
              >
                Delete Task
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
