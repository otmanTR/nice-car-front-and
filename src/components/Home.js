import React, { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCars } from '../redux/cars/carsSlice';
import Cars from './cars/Cars';
import { Navbar } from '../Navbar/Navbar';

export function Home() {
  const cars = useSelector((state) => state.cars.cars) || [];
  const carsContainerRef = useRef(null);
  const dispatch = useDispatch();
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    dispatch(getCars());
  }, [dispatch]);

  const scrollLeft = () => {
    if (carsContainerRef.current) {
      carsContainerRef.current.scrollBy({
        left: -carsContainerRef.current.offsetWidth,
        behavior: 'smooth',
      });
      setStartIndex((prevIndex) => Math.max(0, prevIndex - 1));
    }
  };

  const scrollRight = () => {
    if (carsContainerRef.current) {
      carsContainerRef.current.scrollBy({
        left: carsContainerRef.current.offsetWidth,
        behavior: 'smooth',
      });
      setStartIndex((prevIndex) => Math.min(prevIndex + 1, cars.length - 3));
    }
  };

  const visibleCars = cars.slice(startIndex, startIndex + 3).filter(Boolean);

  return (
    <div className="mainContainer">
      <div>
        <Navbar />
      </div>
      <div>
        <h2>Our Cars</h2>
        <h3>Select your favorite car!</h3>
        <div className="carItems">
          <div className="carousel" ref={carsContainerRef}>
            <Cars cars={visibleCars} />
          </div>
        </div>
        <div className="arrow-buttons-container">
          <button
            className="arrow-button arrow-left"
            onClick={scrollLeft}
            type="button"
          >
            Previous
          </button>
          <button
            className="arrow-button arrow-right"
            onClick={scrollRight}
            type="button"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
