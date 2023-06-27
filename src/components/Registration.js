/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createUser } from '../redux/users/usersSlice';
import './CreateUserForm.css';

export const CreateUserForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

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

  return (
    <div className="container">
      <div className="create-user-form">
        <h2 className="form-heading">Create User</h2>
        <form className="register-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Name</label>
            <input
              type="text"
              id="username"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
              aria-labelledby="username"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-labelledby="email"
            />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default CreateUserForm;
