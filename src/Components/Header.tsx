import { useContext } from 'react'
import { Link } from 'react-router-dom';

import { CartContext } from '../App';

function Header() {
    const context = useContext(CartContext);
    if (!context) {
        return null;
    }
    const { totalCartItem } = context;
    return (
        <header className="text-xl text-white bg-sky-900 p-4 sm:px-12 flex justify-between">
            <Link to="/">Your Store</Link>
            <Link to="/cart">Cart ({totalCartItem})</Link>
        </header>
    );
}

export default Header;
