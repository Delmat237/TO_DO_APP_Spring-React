import React, { useEffect, useState } from 'react';
import '../App.css';

function TasksCrud({ token }) {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [isAdding, setIsAdding] = useState(false);

  useEffect(() => {
    if (!token) return;

    setLoading(true);
    setError(null);

    fetch("http://localhost:9000/api/tasks", {
      headers: {
        "Authorization": `Basic ${token}`,
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        if (!res.ok) throw new Error(`Erreur HTTP: ${res.status}`);
        return res.json();
      })
      .then(data => setTasks(data))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, [token]);

  const handleAdd = async (e) => {
    e.preventDefault();
    setError(null);

    if (!title.trim() || !description.trim()) {
      setError("Le titre et la description sont obligatoires.");
      return;
    }

    setIsAdding(true);
    try {
      const res = await fetch("http://localhost:9000/api/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Basic ${token}`
        },
        body: JSON.stringify({ title, description })
      });

      if (!res.ok) {
        throw new Error(`Erreur HTTP: ${res.status}`);
      }

      const newTask = await res.json();
      setTasks(prevTasks => [...prevTasks, newTask]);
      setTitle("");
      setDescription("");
    } catch (err) {
      setError(err.message);
    } finally {
      setIsAdding(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Voulez-vous vraiment supprimer cette tâche ?")) return;

    setError(null);

    try {
      const res = await fetch(`http://localhost:9000/api/tasks/${id}`, {
        method: "DELETE",
        headers: {
          "Authorization": `Basic ${token}`
        }
      });

      if (!res.ok) {
        throw new Error(`Erreur HTTP: ${res.status}`);
      }

      setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="container">
      <h2>Gestion des tâches</h2>

      <form onSubmit={handleAdd} style={{ marginBottom: '20px' }}>
        <input
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="Titre"
          required
          style={{ marginRight: '10px', padding: '8px', fontSize: '16px' }}
          aria-label="Titre de la tâche"
        />
        <input
          value={description}
          onChange={e => setDescription(e.target.value)}
          placeholder="Description"
          required
          style={{ marginRight: '10px', padding: '8px', fontSize: '16px' }}
          aria-label="Description de la tâche"
        />
        <button type="submit" disabled={isAdding} style={{ padding: '10px 20px', fontSize: '16px' }}>
          {isAdding ? "Ajout en cours..." : "Ajouter"}
        </button>
      </form>

      {error && <p className="error-message" role="alert">{error}</p>}
      {loading && <p>Chargement des tâches...</p>}
      {!loading && tasks.length === 0 && <p className="message">Aucune tâche trouvée.</p>}

      <ul className="task-list">
        {tasks.map(task => (
          <li key={task.id}>
            <span><b>{task.title}</b> - {task.description}</span>
            <button onClick={() => handleDelete(task.id)} aria-label={`Supprimer la tâche ${task.title}`}>
              Supprimer
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TasksCrud;
