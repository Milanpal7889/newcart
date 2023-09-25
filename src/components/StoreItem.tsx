
import { useShoppingCart } from "../context/ShoppingCartContext"
import { FormatCurrency } from "../utilities/FormatCurrency"

interface item{
    id:number
    title:string,
    price:number,
    image:string
}

export function StoreItem({id, title, price, image}:item){
    const { getItemQuantity,
         increaseCartQuantity,
         decreaseCartQuantity,
         removeFromCart} = useShoppingCart()
    const quantity = getItemQuantity(id)


    return <div className="w-1/4 hover:shadow-lg bg-slate-50 m-2 flex flex-col flex-grow p-4">
                <img 
                src={image}
                className="h-64 aspect-auto self-center" 
                alt="product" />

                <div className="flex flex-col">

                    <div className="flex flex-row justify-between items-baseline my-3">
                        <span className="text-lg"> {title} </span>
                        <span className="text-gray-700 "> {FormatCurrency(price)} </span>
                    </div>

                    <div className="m-auto">
                        {!quantity?(
                            <button onClick={()=>increaseCartQuantity(id)} className="w-32 bg-blue-700 p-2 text-white rounded hover:bg-blue-600">Add to cart</button>
                        ):(
                            <div className="flex flex-col items-center gap-2">
                                <div className="flex items-center justify-center">
                                    <button onClick={()=>{decreaseCartQuantity(id)}} className="h-10 w-9 bg-blue-600 p-2 rounded m-2 text-white hover:bg-blue-500"> - </button> 
                                    <div> 
                                    <span className="text-2xl"> { quantity } </span> 
                                    in cart 
                                    </div>  
                                    <button onClick={()=>{increaseCartQuantity(id)}} className="h-10 w-9 bg-blue-600 p-2 rounded m-2 text-white hover:bg-blue-500"> + </button> 
                                </div>
                                <button onClick={()=>removeFromCart(id)} className="bg-red-600 text-white p-2 rounded hover:bg-red-500">Remove</button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
}

export default StoreItem