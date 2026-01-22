"use client";
import { useEffect, useState } from "react";

const JSONBIN_BIN_ID = "6972568cae596e708fedf5af";
const JSONBIN_API_KEY = "$2a$10$uVCWIzoaU.NfpWq9SZnq8u5ktEdeEHVyVPpl9wZb3CUi5joXj09lC"; // X-Master-Key
const JSONBIN_URL = `https://api.jsonbin.io/v3/b/${JSONBIN_BIN_ID}`;

const TaskManager = () => {
  const [tasks, setTasks] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  // Încarcă taskurile de pe jsonbin
  const fetchTasks = async () => {
    setLoading(true);
    try {
      const res = await fetch(JSONBIN_URL + "/latest", {
        headers: { "X-Master-Key": JSONBIN_API_KEY },
      });
      const data = await res.json();
      let loadedTasks = data.record;
      if (!Array.isArray(loadedTasks)) loadedTasks = [loadedTasks]; // transformăm în array dacă e obiect
      setTasks(loadedTasks);
    } catch (err) {
      console.error("Error fetching tasks:", err);
      setTasks([]);
    } finally {
      setLoading(false);
    }
  };

  // Adaugă task
  const addTask = async () => {
    if (!name.trim() || !description.trim()) return alert("Completează toate câmpurile!");
    const newTasks = [...tasks, { name: name.trim(), description: description.trim() }];
    try {
      const res = await fetch(JSONBIN_URL, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "X-Master-Key": JSONBIN_API_KEY,
          "X-Bin-Versioning": "false",
        },
        body: JSON.stringify(newTasks),
      });
      if (!res.ok) throw new Error("Failed to save");
      setTasks(newTasks);
      setName("");
      setDescription("");
    } catch (err) {
      console.error(err);
      alert("Eroare la salvarea taskului.");
    }
  };

  // Șterge task
  const deleteTask = async (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    try {
      const res = await fetch(JSONBIN_URL, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "X-Master-Key": JSONBIN_API_KEY,
          "X-Bin-Versioning": "false",
        },
        body: JSON.stringify(newTasks),
      });
      if (!res.ok) throw new Error("Failed to delete");
      setTasks(newTasks);
    } catch (err) {
      console.error(err);
      alert("Eroare la ștergere.");
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-8 text-blue-600">Task Manager</h1>

      {/* Formular adăugare task */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-8">
        <input
          type="text"
          placeholder="Nume task"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border rounded p-3 mb-3 focus:outline-blue-500"
        />
        <textarea
          placeholder="Descriere task"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full border rounded p-3 mb-3 focus:outline-blue-500"
          rows={3}
        />
        <button
          onClick={addTask}
          className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition"
        >
          Adaugă Task
        </button>
      </div>

      {/* Lista taskuri */}
      <h2 className="text-2xl font-semibold mb-4 text-gray-700">Taskuri existente:</h2>
      {loading ? (
        <p className="text-center">Se încarcă...</p>
      ) : tasks.length === 0 ? (
        <p className="text-center text-gray-500">Nu există taskuri.</p>
      ) : (
        <div className="grid gap-6">
          {tasks.map((task, index) => (
            <div
              key={index}
              className="bg-gray-50 shadow-md rounded-lg p-4 flex justify-between items-start"
            >
              <div>
                <p className="font-bold text-lg text-gray-800">{task.name}</p>
                <p className="text-gray-700">{task.description}</p>
              </div>
              <button
                onClick={() => deleteTask(index)}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
              >
                Șterge
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TaskManager;
