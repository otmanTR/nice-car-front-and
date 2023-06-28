import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createUser } from '../redux/users/usersSlice';
import './CreateUserForm.css';

export function CreateUserForm() {
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
    <div className="container">
      <div className="create-user-form">
        <h2 className="form-heading">Create User</h2>
        {error && <p className="error">{error}</p>}
        {successMessage && <p className="success">{successMessage}</p>}
        <form className="register-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">
              Name
              <input
                type="text"
                id="username"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
                aria-labelledby="username"
              />
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="email">
              Email
              <input
                type="email"
                id="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                aria-labelledby="email"
              />
            </label>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default CreateUserForm;
