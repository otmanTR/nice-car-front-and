import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addCar } from '../redux/cars/carsSlice';

const AddCar = () => {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [model, setModel] = useState('');
  const [price, setPrice] = useState('');
  const [message, setMessage] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = async () => {
    try {
      const response = await dispatch(addCar({
        name,
        image,
        model,
        price,
      }));
      setMessage('Added car successfully' || '');
    } catch (error) {
      console.error('Add car failed:', error);
      setMessage(error.message || '');
    }
  };

  return (
    <div className="add-car-form">
      <p>{message}</p>
      <p className="add-car-title">Add a car</p>
      <div className="inputs">
        <input className="name-car-input" type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <input className="image-input" type="text" placeholder="Image link" value={image} onChange={(e) => setImage(e.target.value)} />
        <input className="model-input" type="text" placeholder="Car Model" value={model} onChange={(e) => setModel(e.target.value)} />
        <input className="price-input" type="text" placeholder="Car Price $" value={price} onChange={(e) => setPrice(e.target.value)} />
        <button className="add-car-button" type="button" onClick={handleSubmit}>Add car</button>
        <Link to="/main" className="link back-cars">Back to Cars</Link>
      </div>
    </div>
  );
};

export default AddCar;
