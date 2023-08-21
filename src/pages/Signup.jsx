import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { signup, currentUser } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      return console.log("Failed to create an account");
    }

    try {
      await signup(email, password);
      navigate('/commerce_x/');
    } catch {
      console.log("Failed to create an account");
    }
  }

  return (
    <div className="auth-container">
      <div className="content">
        <h1>Sign Up</h1>
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
              <label>Confirm Password</label>
            </div>
            <div>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
            <div>
              <input type="submit" value="Sign Up" className="submit-btn" />
            </div>

            <p>
              Already have Acount? <Link to="/commerce_x/signin/">Log In</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
