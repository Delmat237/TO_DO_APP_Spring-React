import React, { useEffect, useState } from 'react';
import '../App.css';



function TasksList({ token }) {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!token) return;

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
    .catch(err => setError(err.message));
  
  }, [token]);

  if (error) return <p className="message">Erreur : {error}</p>;
  if (tasks.length === 0) return <p className="message">Aucune tâche trouvée.</p>;

  return (
    <div className="container">
      <h2>Liste des tâches</h2>
      <ul className="task-list">
        {tasks.map(task => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default TasksList;
