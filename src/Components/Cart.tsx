import { useContext } from 'react'
import Header from './Header';
import Listing from './Listing';
// import Footer from './Footer';

import { CartContext } from '../App';

function Cart() {
    const context = useContext(CartContext);
    if (!context) {
        return null;
    }
    const { cart } = context;

    // const [skip, setSkip] = useState<number>(0);
    // const [totalPages, setTotalPages] = useState<number>(0);
    // const [currentPage, setCurrentPage] = useState<number>(1);

    return (
        <div className="flex flex-col justify-between h-screen text-center">
            <Header />
            {
                cart.length > 0 && 
                <Listing 
                    productList={cart} 
                    source={'CART'}
                />
            }
            {
                cart.length === 0 && 
                (
                    <div>CART EMPTY</div>
                )
            }
            {/* <Footer 
                currentPage={currentPage} 
                totalPages={totalPages}
                handlePageChange={handlePageChange}
            /> */}
        </div>
    );
}

export default Cart;
