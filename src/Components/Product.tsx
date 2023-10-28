// import React from 'react';

interface ProductProps {
    product: {
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
    };
}

function Product({ product }: ProductProps) {
    console.log(' ---- in product => ', product);
    return (
        <div className="flex flex-col justify-between text-center p-2 bg-white items-center min-h-max">
            <div className="flex justify-between border-b border-slate-400">
                <img
                src={product.thumbnail}
                alt="product-image"
                className="h-5 w-5"
                />
                <div className="flex flex-col justify-between">
                <p>{product.title}</p>
                <p>{product.price}</p>
                </div>
            </div>
            <div className="flex justify-between">
                <p>{product.description}</p>
                <button>ATC</button>
            </div>
        </div>
    );
}

export default Product;
