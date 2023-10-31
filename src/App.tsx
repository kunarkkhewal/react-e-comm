import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Cart from './Components/Cart';

function App() {
  const [totalCartItem, setTotalCartItem] = useState<number>(0); // need to update this for cart product
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home totalCartItem={totalCartItem} setTotalCartItem={setTotalCartItem} />} />
        <Route path="/cart" element={<Cart totalCartItem={totalCartItem} setTotalCartItem={setTotalCartItem} />} />
      </Routes>
    </Router>
  );
}

export default App;
