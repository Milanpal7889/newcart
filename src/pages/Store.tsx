
import { StoreItem } from "../components/StoreItem";
import { useProductsState } from "../data/FetchData";

type Product = {
    id: number;
    title: string;
    price: number;
    image: string;
};

export function Store(){
    const productsState: Product[] =  useProductsState();

    return (
        <div className="m-8 flex flex-row flex-wrap">
            {productsState.map((product) => (
                <StoreItem key={product.id} {...product} />
            ))}
        </div>
    );
}
