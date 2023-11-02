import { useContext } from 'react'
import { ProductData } from "../Interfaces/interfaces"
import { CartContext } from '../App';

interface ProductProps {
    product: ProductData;
    source: string;
}

function Product({ product, source }: ProductProps) {
    const context = useContext(CartContext);
    if (!context) {
        return null;
    }
    const { cart, setCart, totalCartItem, setTotalCartItem } = context;

    function getUpdatedCart(): ProductData[] {
        const updatedCart = cart.filter((item) => {
        return item.id !== product.id;
        });
        return updatedCart;
    }

    function handleAddToCardButton() {
        let addedProduct: ProductData = {
            ...product,
            quantityAdded: product.quantityAdded + 1 || 1,
        };

        for (let index = 0; index < cart.length; index++) {
            if (cart[index].id === product.id) {
                addedProduct = {...cart[index], quantityAdded: cart[index].quantityAdded + 1 || 1};
                cart.splice(index,1)
                break;
            }
        }

        setCart([...cart, addedProduct])
        setTotalCartItem(totalCartItem + 1);
    }

    function handleRemoveButton() {
        const updatedCart = getUpdatedCart();
        setCart(updatedCart)
        setTotalCartItem(totalCartItem - product.quantityAdded);
    }

    function handleQuantityIncrease() {
        for (let index = 0; index < cart.length; index++) {
            if (cart[index].id === product.id) {
                cart[index].quantityAdded += 1; 
            }
        }
        setCart(cart)
        setTotalCartItem(totalCartItem + 1);
    }

    function handleQuantityDecrease() {
        if (product.quantityAdded === 1) {
            return handleRemoveButton();
        }
        for (let index = 0; index < cart.length; index++) {
            if (cart[index].id === product.id) {
                cart[index].quantityAdded -= 1; 
            }
        }
        setCart(cart)
        setTotalCartItem(totalCartItem - 1);
    }

    return (
        <div className="h-[220px] flex flex-col justify-between text-center p-2 bg-white items-center min-h-max border border-slate-100 rounded-xl hover:shadow-lg">
            <div className="flex justify-between border-b border-slate-200 h-1/2 w-full pb-1">
                <img
                    src={product.thumbnail}
                    alt="product-image"
                    className="w-1/2 rounded-xl "
                />
                <div className="flex flex-col justify-between basis-1/2 ml-1 ">
                    <p className=" text-base font-bold text-slate-800">{product.title}</p>
                    <p className=" items-end">Price: {product.price}</p>
                </div>
            </div>
            {
                source === 'HOME' &&
                <div className="flex justify-between h-1/2 w-full p-2">
                    <p className="self-center basis-3/4 overflow-clip pr-4 text-sm font-semibold text-slate-900">{product.description}</p>
                    <button className="h-1/2 self-center border border-orange-700 bg-red-700 rounded-xl basis-1/4 text-white font-bold" onClick={() => handleAddToCardButton()}>Add To Cart</button>
                </div>
            }
            {
                source === 'CART' &&
                <div className="flex justify-between h-1/2 w-full p-2">
                    <button className="h-1/2 self-center border border-orange-700 bg-red-700 rounded-xl basis-1/4 text-white font-bold" onClick={() => handleRemoveButton()}>Remove</button>
                    <div className='flex flex-col justify-between'>
                        <div className='flex space-x-4'>
                            <button className="py-2 px-4 self-center border border-orange-700 bg-red-700 rounded-xl text-white font-bold" onClick={() => handleQuantityIncrease()}>+</button>
                            <button className="py-2 px-4 self-center border border-orange-700 bg-red-700 rounded-xl text-white font-bold" onClick={() => handleQuantityDecrease()}>-</button>
                        </div>
                        <p className='font-bold'>{product.quantityAdded}</p>
                    </div>
                </div>
            }
        </div>
    );
}

export default Product;
