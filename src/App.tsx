import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

import Product from './Components/Product';
import Pagination from './Components/Pagination';

interface ProductData {
  id: number,
  title: string,
  description: string,
  price: number,
  discountPercentage: number,
  rating: number,
  stock: number,
  brand: string,
  category: string,
  thumbnail: string,
  images: string[],
}

function App() {
  const limit = 5;

  const [products, setProducts] = useState<ProductData[]>([]);
  const [skip, setSkip] = useState<number>(0);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    async function getProducts() {
      const url = `https://dummyjson.com/products?skip=${skip}&limit=${limit}`;
      try {
        const result = await axios.get(url);
        console.log(' ------- result => ', result);
        setProducts(result.data.products);
        setTotalPages(result.data.total / limit);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    }
    getProducts();
  }, [skip]);

  const handlePageChange = (page: number) => {
    if (page > 0) {
      setSkip(limit * (page - 1))
      setCurrentPage(page);
    }
  }

  const productList = products.map((product) => (
    <Product key={product.id} product={product} />
  ));

  return (
    <div className="flex flex-col justify-between h-screen text-center">
      <header className="text-xl text-slate-700 bg-red-400">This is header</header>
      <main className="bg-slate-500 h-full p-4 grid grid-cols-3 gap-4">
        {productList}
      </main>
      <div className="bg-yellow-300 flex justify-between p-4">
        {currentPage > 1 && (
          <div className='border border-black p-2' onClick={() => { handlePageChange(currentPage - 1) }}>
            Prev
          </div>
        )}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
        {currentPage < totalPages && (
          <div className='border border-black p-2' onClick={() => { handlePageChange(currentPage + 1) }}>
            Next
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
