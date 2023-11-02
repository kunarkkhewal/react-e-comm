import { useState, useEffect, useContext } from 'react'
import Header from './Header';
import Listing from './Listing';
import Footer from './Footer';
import { ProductData } from '../Interfaces/interfaces';
import { CartContext } from '../App';

function Cart() {
    const { cart } = useContext(CartContext) || { cart: [] }; 
    const limit = 5;
    const [products, setProducts] = useState<ProductData[]>([]);
    const [skip, setSkip] = useState<number>(0);
    const [totalPages, setTotalPages] = useState<number>(0);
    const [currentPage, setCurrentPage] = useState<number>(1);

    useEffect(() => {
        if (cart) {
            const auxillaryCart = cart.slice(skip, skip+limit);
            setProducts(auxillaryCart)
            setTotalPages(Math.ceil(cart.length / limit));
        }
    }, [cart, skip]);

    const handlePageChange = (page: number) => {
        if (page > 0 && page <= totalPages) {
            setSkip(limit * (page - 1));
            setCurrentPage(page);
        }
    }

    return (
        <div className="flex flex-col justify-between h-screen text-center">
            <Header />
            {
                cart.length > 0 && 
                <Listing 
                    productList={products} 
                    source={'CART'}
                />
            }
            {
                cart.length === 0 && 
                (
                    <div>CART EMPTY</div>
                )
            }
            <Footer 
                currentPage={currentPage} 
                totalPages={totalPages}
                handlePageChange={handlePageChange}
            />
        </div>
    );
}

export default Cart;
