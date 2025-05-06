import React, { useState } from "react";
import '../App.css';

function Login({ onLogin, onSwitchToSignup }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    console.log("Tentative de connexion avec :", { username, password });

    try {
      const credentials = btoa(`${username}:${password}`);

      const response = await fetch("http://localhost:9000/api/tasks", {
        method: "GET",
        headers: {
          "Authorization": `Basic ${credentials}`,
          "Content-Type": "application/json"
        }
      });

      console.log("Réponse du serveur :", response);

      if (response.ok) {
        onLogin(credentials);
        console.log("Connexion réussie");
      } else {
        console.error("Erreur de connexion :", response.status);
        setError("Identifiants invalides");
      }
    } catch (error) {
      console.error("Erreur lors du fetch :", error);
      setError("Erreur réseau");
    }
  };

  return (
    <div className="app-container">
      <div className="login-container">
        <h1 className="login-title">Connexion</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username" className="form-label">Nom d'utilisateur</label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={e => setUsername(e.target.value)}
              required
              className="form-input"
              placeholder="Entrez votre nom d'utilisateur"
              autoComplete="username"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password" className="form-label">Mot de passe</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
              className="form-input"
              placeholder="Entrez votre mot de passe"
              autoComplete="current-password"
            />
          </div>

          <button type="submit" className="submit-button">Se connecter</button>
        </form>

        {error && <p className="error-message">{error}</p>}

        <p style={{ marginTop: 20, textAlign: "center" }}>
          Pas de compte ?{" "}
          <button 
            type="button" 
            onClick={onSwitchToSignup} 
            style={{ 
              background: "none", 
              border: "none", 
              color: "#007BFF", 
              cursor: "pointer", 
              textDecoration: "underline", 
              padding: 0, 
              fontSize: "1em" 
            }}
          >
            Inscrivez-vous ici
          </button>
        </p>
      </div>
    </div>
  );
}

export default Login;
