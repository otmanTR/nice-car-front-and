import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaSearch } from 'react-icons/fa';
import { getCars } from '../redux/cars/carsSlice';
import Cars from './Cars';


export const Home = () => {
    const car = useSelector((state) => state.cars);
    const dispatch = useDispatch();
    const [search, setSearch] = useState('');
  
    useEffect(() => {
      dispatch(getCars());
    }, [dispatch]);
  
    return (
      <div className="mainContainer">
        <div>
  
          <div className="container">
           
            <div className="searchBox">
              <input
                type="text"
                className="searchInput"
                placeholder="Search..."
                onChange={(event) => setSearch(event.target.value)}
              />
            </div>
            <div>
              <button aria-label="Mute volume" type="button" className="searchButton" onChange={(e) => setSearch(e.target.value)}>
                <FaSearch />
              </button>
            </div>
          </div>
        </div>
        <div className="carItems">
          <Cars cars={car.filter((car) => (search.toLowerCase() === '' ? car : car.name.toLowerCase().includes(search.toLowerCase())))} />
  
        </div>
      </div>
    );
  };
  
  export default { Home };