import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createUser } from '../redux/users/usersSlice';

export const CreateUserForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const { error, successMessage } = useSelector((state) => state.users);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      name,
      email,
    };
    dispatch(createUser(newUser));
    setName('');
    setEmail('');
  };

  useEffect(() => {
    if (successMessage) {
      setTimeout(() => {
        window.location.href = '/home';
      }, 2000);
    }
  }, [successMessage]);

  return (
    <div className="create-user-form">
      <h2>Create User</h2>
      {error && <p className="error">{error}</p>}
      {successMessage && <p className="success">{successMessage}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">
            Name:
            <input
              type="text"
              id="username"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label htmlFor="email">
            Email:
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </div>
        <button type="submit">Create User</button>
      </form>
    </div>
  );
};

export default CreateUserForm;
