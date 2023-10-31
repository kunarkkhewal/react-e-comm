// import React from 'react';
import { ProductData } from "../Interfaces/interfaces"

interface ProductProps {
    product: ProductData,
    source: string
}

function Product({ product }: ProductProps) {
    // console.log(' ---- in product => ', product);
    return (
        <div className="flex flex-col justify-between text-center p-2 bg-white items-center min-h-max border border-slate-100 rounded-xl hover:shadow-lg">
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
            <div className="flex justify-between h-1/2 w-full p-2">
                <p className="self-center basis-3/4 overflow-clip pr-4 text-sm font-semibold text-slate-900">{product.description}</p>
                <button className="h-1/2 self-center border border-orange-700 bg-red-700 rounded-xl basis-1/4 text-white font-bold">Add To Cart</button>
            </div>
        </div>
    );
}

export default Product;
