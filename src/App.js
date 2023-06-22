import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import { Home } from './components/Home';
import { DeleteCar } from './components/DeleteCar';
import Navbar from './Navbar/Navbar';

function App() {
  return (
    <>
      <div className="App">
        <Provider store={store}>
          <BrowserRouter>
            <Routes>
              <Route exact path="/" element={<Navbar to="/cars" />} />
              <Route path="/" element={<Home />} />
              <Route path="/car-delete" element={<DeleteCar />} />
            </Routes>
          </BrowserRouter>
        </Provider>
      </div>
    </>
  );
}

export default App;
