import React, { createContext, useState, ReactNode } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ProductData } from './Interfaces/interfaces';
import Home from './Components/Home';
import Cart from './Components/Cart';

export const CartContext = createContext<CartContextType | undefined>(undefined);
interface CartContextType {
  cart: ProductData[];
  setCart: (cart: ProductData[]) => void;
  totalCartItem: number;
  setTotalCartItem: (totalCartItem: number) => void;
}

function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<ProductData[]>([]);
  const [totalCartItem, setTotalCartItem] = useState<number>(0);

  return (
    <CartContext.Provider value={{ cart, setCart, totalCartItem, setTotalCartItem }}>
      {children}
    </CartContext.Provider>
  );
}

function App() {
  return (
    <Router>
      <CartProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </CartProvider>
    </Router>
  );
}

export default App;
