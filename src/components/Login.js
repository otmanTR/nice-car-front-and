import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../redux/users/usersSlice';
import './LoginForm.css';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(loginUser({ name: username }));
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2 className="login-heading">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary btn-login">Login</button>
        </form>
        <h2 className="or-heading">Or</h2>
        <Link to="/registration" className="link">
          <button type="button" className="btn btn-secondary btn-register">Register</button>
        </Link>
      </div>
    </div>
  );
};

export default LoginForm;
