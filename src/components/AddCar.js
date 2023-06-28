import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCar } from '../redux/cars/carsSlice';
import { Navbar } from '../Navbar/Navbar';
import './AddCar.css';

export function AddCar() {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [model, setModel] = useState('');
  const [price, setPrice] = useState('');
  const [message, setMessage] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = async () => {
    try {
      await dispatch(
        addCar({
          name,
          image,
          model,
          price,
          user_id: 1,
        }),
      );
      setMessage('Added car successfully' || '');
    } catch (error) {
      setMessage(error.message || 'Add car failed');
    }
  };

  return (
    <div className="mainContainer">
      <div>
        <Navbar />
      </div>
      <div className="add-car-form">
        <p>{message}</p>
        <div className="add-car-inputs">
          <input
            className="name-car-input"
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="image-input"
            type="text"
            placeholder="Image link"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
          <input
            className="model-input"
            type="text"
            placeholder="Car Model"
            value={model}
            onChange={(e) => setModel(e.target.value)}
          />
          <input
            className="price-input"
            type="text"
            placeholder="Car Price $"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <button className="add-car-button" type="button" onClick={handleSubmit}>
            Add car
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddCar;
