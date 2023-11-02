import Product from './Product';
import { ProductData } from '../Interfaces/interfaces';

interface ProductProps {
    productList: ProductData[],
    source: string
}

function Listing({ productList, source, }: ProductProps) {
    return (
        <div className="bg-slate-200 h-full p-4 sm:px-12 grid grid-cols-3 gap-4 overflow-scroll">
        {productList.map((product) => (
            <Product 
                key={product.id} 
                product={product} 
                source={source}
            />
        ))}
        </div>
    );
}

export default Listing;

