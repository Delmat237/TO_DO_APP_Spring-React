import React, { useState } from "react";
import Login from "./components/Login";
import Signup from "./components/Signup";
import TasksCrud from "./components/TasksCrud";

function App() {
  const [token, setToken] = useState(null);
  const [page, setPage] = useState("login"); // 'login' ou 'signup'

  // Affichage conditionnel selon l'état de connexion et la page active
  if (!token) {
    return (
      <>
        {page === "login" && (
          <Login 
            onLogin={setToken} 
            onSwitchToSignup={() => setPage("signup")} 
          />
        )}
        {page === "signup" && (
          <Signup 
            onSwitchToLogin={() => setPage("login")} 
          />
        )}
      </>
    );
  }

  // Affichage principal après connexion
  return (
    <div>
      <button 
        onClick={() => setToken(null)} 
        style={{ margin: 20 }}
        aria-label="Déconnexion"
      >
        Déconnexion
      </button>
      <TasksCrud token={token} />
    </div>
  );
}

export default App;
