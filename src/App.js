import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setPizzas } from './components/redux/actions/pizzas';
import Header from './components/Header';
import Home from './pages/Home';
import Cart from './pages/Cart';
import './scss/app.scss';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPizzas());
  }, [dispatch]);
  return (
    <Router>
      <div className='wrapper'>
        <Header />
        <div className='content'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
