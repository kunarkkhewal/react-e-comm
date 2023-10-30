import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import { ProductData } from './Interfaces/interfaces';

import HomePageListing from './Components/HomePageListing';
import Footer from './Components/Footer';

function App() {
  const limit = 5;

  const [products, setProducts] = useState<ProductData[]>([]);
  const [skip, setSkip] = useState<number>(0);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    async function getProducts() {
      const url = `https://dummyjson.com/products?skip=${skip}&limit=${limit}`;
      try {
        const result = await axios.get(url);
        setProducts(result.data.products);
        setTotalPages(Math.ceil(result.data.total / limit));
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    }
    getProducts();
  }, [skip]);

  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPages) {
      setSkip(limit * (page - 1));
      setCurrentPage(page);
    }
  }

  return (
    <div className="flex flex-col justify-between h-screen text-center">
      <header className="text-xl text-white bg-sky-900 p-4 sm:px-12 flex justify-between">
        <div>
          Your Store
        </div>
        <div>
          Cart
        </div>
      </header>
      
      <HomePageListing 
        productList={products} 
      />
      
      <Footer 
        currentPage={currentPage} 
        totalPages={totalPages}
        handlePageChange={handlePageChange}
      />
    </div>
  );
}

export default App;
