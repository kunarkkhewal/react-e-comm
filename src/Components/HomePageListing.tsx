import Product from './Product';
import { ProductData } from '../Interfaces/interfaces';

interface ProductProps {
    productList: ProductData[]
}

function HomePageListing({ productList }: ProductProps) {
    return (
        <div className="bg-slate-200 h-full p-4 sm:px-12 grid grid-cols-3 gap-4 overflow-scroll">
        {productList.map((product) => (
            <Product key={product.id} product={product} />
        ))}
        </div>
    );
}

export default HomePageListing;

