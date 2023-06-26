import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../redux/users/usersSlice';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(loginUser({ name: username }));
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      <h2>Or</h2>
      <Link to="/registration" className="link">
        <button type="button">Register</button>
      </Link>
    </div>
  );
};

export default LoginForm;
