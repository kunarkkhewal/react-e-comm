
import { TotalCartItemAndSetter } from '../Interfaces/interfaces';

import Header from './Header';
import Listing from './Listing';

function Cart({totalCartItem, setTotalCartItem}: TotalCartItemAndSetter) {
    return (
        <div className="flex flex-col justify-between h-screen text-center">
            <Header 
                totalCartItem={totalCartItem} 
                setTotalCartItem={setTotalCartItem}
            />
            
            <Listing 
                productList={[]}  // to be updated
                source={'CART'}
            />
        </div>
    );
}

export default Cart;
