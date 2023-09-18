import { useState, useEffect } from "react";

type Product = {
    id: number;
    title: string;
    price: number;
    image: string;
};

export const useProductsState = () => {
    const [productsState, setProductsState] = useState<Product[]>([]);

    useEffect(() => {
        async function fetchProducts() {
            try {
                const response = await fetch("https://fakestoreapi.com/products");
                const fetchedProductsState: Product[] = await response.json();
                setProductsState(fetchedProductsState);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        }

        fetchProducts();
    }, []);

    return productsState;
};
