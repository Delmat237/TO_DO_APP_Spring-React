import React, { useEffect, useState } from 'react';

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('/api/users')  // Assure-toi que cette URL est correcte et accessible
      .then(res => {
        if (!res.ok) throw new Error('Erreur réseau');
        return res.json();
      })
      .then(data => setUsers(data))
      .catch(err => console.error('Fetch users failed:', err));
  }, []);

  if (users.length === 0) return <p>Aucun utilisateur trouvé.</p>;

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.username}</li>
      ))}
    </ul>
  );
}

export default UserList;
