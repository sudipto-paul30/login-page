import { useState } from "react";
import "../assets/css/custom.css";
import netxLogo from "../assets/images/netX-logo.png";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const DEMO_USERNAME = "user@netx.com";
  const DEMO_PASSWORD = "Password@123";

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === DEMO_USERNAME && password === DEMO_PASSWORD) {
      setIsSuccess(true);
      setMessage("Login successful! Welcome to NetX...");
    } else {
      setIsSuccess(false);
      setMessage("Invalid username or password. Please try again.");
      setTimeout(() => {
        setPassword("");
        setMessage("");
      }, 3000);
    }
  };

  return (
    <div className="login-page-wrapper">
      <div className="login-card">
        <header>
          <img src={netxLogo} alt="NetX Logo" />
          <p>
            Please sign in to your <span>NetX</span> account here.
          </p>
        </header>

        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Sign In</button>
        </form>

        {message && (
          <div className={`message ${isSuccess ? "success" : "error"}`}>
            {message}
          </div>
        )}
      </div>
    </div>
  );
}
