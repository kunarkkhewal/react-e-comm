import { useState, useEffect } from 'react';
import axios from 'axios';

import { ProductData, TotalCartItemAndSetter } from '../Interfaces/interfaces';

import Header from './Header';
import Listing from './Listing';
import Footer from './Footer';

function Home({totalCartItem, setTotalCartItem}: TotalCartItemAndSetter) {
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
            <Header 
                totalCartItem={totalCartItem} 
                setTotalCartItem={setTotalCartItem}
            />
            <Listing 
                productList={products} 
                source={'HOME'}
            />
            <Footer 
                currentPage={currentPage} 
                totalPages={totalPages}
                handlePageChange={handlePageChange}
            />
        </div>
    );
}

export default Home;
