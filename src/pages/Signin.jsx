import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login, currentUser } = useAuth();
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await login(email, password);
      navigate('/commerce_x/');
    } catch {
      console.log("Failed to create an account");
    }
  }

  return (
    <div className="auth-container">
      <div className="content">
        <h1>Log in</h1>
        <div className="form-content">
          <form onSubmit={handleSubmit}>
            <div>
              <label>Email</label>
            </div>
            <div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label>Password</label>
            </div>
            <div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div>
              <input type="submit" value="Log in" className="submit-btn"/>
            </div>

            <p>
              Need an Acount? <Link to="/commerce_x/signup/">Sign Up</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signin;
