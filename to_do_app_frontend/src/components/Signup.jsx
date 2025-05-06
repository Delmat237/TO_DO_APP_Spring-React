import React, { useState } from "react";
import '../App.css';

function Signup({ onSwitchToLogin }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (password !== confirmPassword) {
      setError("Les mots de passe ne correspondent pas.");
      return;
    }

    try {
      const response = await fetch("http://localhost:9000/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, password }),
      });

      if (response.ok) {
        setSuccess("Inscription réussie ! Vous pouvez maintenant vous connecter.");
        setUsername("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
      } else {
        const data = await response.json();
        setError(data.message || "Erreur lors de l'inscription.");
      }
    } catch (err) {
      setError("Erreur réseau, veuillez réessayer plus tard.");
    }
  };

  return (
    <div className="app-container">
      <div className="login-container">
        <h1 className="login-title">Inscription</h1>
        <form onSubmit={handleSubmit} noValidate>
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
              spellCheck="false"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              className="form-input"
              placeholder="Entrez votre email"
              autoComplete="email"
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
              autoComplete="new-password"
            />
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword" className="form-label">Confirmez le mot de passe</label>
            <input
              id="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={e => setConfirmPassword(e.target.value)}
              required
              className="form-input"
              placeholder="Confirmez votre mot de passe"
              autoComplete="new-password"
            />
          </div>

          <button type="submit" className="submit-button">S'inscrire</button>
        </form>

        {error && <p className="error-message" role="alert">{error}</p>}
        {success && <p className="success-message">{success}</p>}

        <p style={{ marginTop: 20, textAlign: "center" }}>
          Déjà un compte ?{" "}
          <button
            type="button"
            onClick={onSwitchToLogin}
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
            Connectez-vous ici
          </button>
        </p>
      </div>
    </div>
  );
}

export default Signup;
