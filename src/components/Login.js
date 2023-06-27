import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../redux/users/usersSlice';

export function LoginForm() {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const { error, successMessage } = useSelector((state) => state.users);

  useEffect(() => {
    if (successMessage) {
      setTimeout(() => {
        window.location.href = '/home';
      }, 2000);
    }
  }, [successMessage]);

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(loginUser({ name: username }));
  };

  return (
    <div>
      <h2>Login</h2>
      {error && <p className="error">{error}</p>}
      {successMessage && <p className="success">{successMessage}</p>}
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
}

export default LoginForm;
