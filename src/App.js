import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import { Home } from './components/Home';
import AddCar from './components/AddCar';
import { DeleteCar } from './components/DeleteCar';

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
            </Routes>
          </BrowserRouter>
        </Provider>
      </div>
    </>
  );
}

export default App;
