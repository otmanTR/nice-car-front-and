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
      <div className="home-bg">
        <h2 className="home-header">Our Cars</h2>
        <h3 className="home-header two">Select your favorite car!</h3>
        <div className="arrows-cars">
          <button
            className="btn"
            onClick={scrollLeft}
            type="button"
          >
            Previous
          </button>
          <div className="carItems">
            <div className="carousel" ref={carsContainerRef}>
              <Cars cars={visibleCars} />
            </div>
          </div>

          <button
            className="btn next-btn"
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
