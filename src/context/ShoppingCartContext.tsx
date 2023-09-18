import { ReactNode, createContext, useContext, useState } from "react";
import { ShoppingCart } from "../components/ShoppingCart";
import { useLocalStorage } from "../hooks/UseLocalStorage";

type ShoppingCartproviderProps = {
    children: ReactNode
}

type ShoppingCartContext = {    
    openCart: () => void
    closeCart: () => void
    cartQuantity: number
    cartItems: cartItem[]
    getItemQuantity: (id:number) => number
    increaseCartQuantity: (id:number) => void
    decreaseCartQuantity: (id:number) => void
    removeFromCart: (id:number) => void
}

type cartItem = {
    id: number,
    quantity: number
} 

const ShoppingCartContext = createContext({} as ShoppingCartContext)

export function useShoppingCart(){
    return useContext(ShoppingCartContext)
}


export function ShoppingCartprovider({children}:ShoppingCartproviderProps){
    const [cartItems, setCartItems] = useLocalStorage<cartItem[]>(
        "shopping-cart",
        []
      )
    const [cartOpen, SetCartOpen] = useState(false)
    const cartQuantity = cartItems.reduce(
        (quantity, item) => 
        item.quantity + quantity, 0
    )
    
    const openCart = () => SetCartOpen(true)
    const closeCart = () => SetCartOpen(false)

    function getItemQuantity(id:number){
        return cartItems.find(items => items.id===id)?.quantity || 0
    }

    function increaseCartQuantity(id:number){
        setCartItems(currentItems =>{
            if(!(cartItems.find(items => items.id===id))){
                return [...cartItems,{id,quantity:1}]
            } else {
                return currentItems.map(items =>{
                    if(items.id === id){
                        return {...items, quantity: items.quantity+1}
                    } else {
                        return items
                    }
                })
            }
        })
    }

    function decreaseCartQuantity(id:number){
        setCartItems(currentItems =>{
            if(cartItems.find(items => items.id===id)?.quantity===1){
                return currentItems.filter(items => items.id!==id)
            } else {
                return currentItems.map(items =>{
                    if(items.id === id){
                        return {...items, quantity: items.quantity - 1}
                    } else {
                        return items
                    }
                })
            }
        })
    }

    function removeFromCart(id:number){
        setCartItems(currentItems => {
            return currentItems.filter(items => items.id!==id)
        })
    }

    return (<ShoppingCartContext.Provider value={{cartItems, cartQuantity, getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart, closeCart, openCart}}>
                {children}
                <ShoppingCart cartopen={cartOpen}/>
            </ShoppingCartContext.Provider>)
}