import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import { Home } from './components/Home';
import { AddCar } from './components/AddCar';
import { DeleteCar } from './components/DeleteCar';
import { Reservations } from './components/Reservations';
import { CreateReservation } from './components/ReservationForm';
import { CarDetails } from './components/carDetails';

function App() {
  return (
    <>
      <div className="App">
        <Provider store={store}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/add_car" element={<AddCar />} />
              <Route path="/car-delete" element={<DeleteCar />} />
              <Route path="/reservations" element={<Reservations />} />
              <Route path="/create-reservation" element={<CreateReservation />} />
              <Route path="/car/:carId" element={<CarDetails />} />
            </Routes>
          </BrowserRouter>
        </Provider>
      </div>
    </>
  );
}
export default App;
