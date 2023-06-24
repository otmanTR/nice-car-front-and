import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import { Home } from './components/Home';
import { DeleteCar } from './components/DeleteCar';
import { Reservations } from './components/Reservations';
import { CreateReservation } from './components/ReservationForm';
import { CarDetails } from './components/CarDetails';
import { CarReservation } from './components/CarReservation';

function App() {
  return (
    <>
      <div className="App">
        <Provider store={store}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/car-delete" element={<DeleteCar />} />
              <Route path="/reservations" element={<Reservations />} />
              <Route path="/create-reservation" element={<CreateReservation />} />
              <Route path="/car/:carId" element={<CarDetails />} />
              <Route path="/car/:carId/reservation" element={<CarReservation />} />
            </Routes>
          </BrowserRouter>
        </Provider>
      </div>
    </>
  );
}
export default App;
