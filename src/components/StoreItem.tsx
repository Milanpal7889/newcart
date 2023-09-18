
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


    return <div className="">
                <img 
                src={image}
                className="h-64 aspect-auto" 
                alt="product" />
                <div className="flex flex-col">
                    <h1 className="flex justify-between items-baseline mb-4">
                        <span className="text-lg"> {title} </span>
                        <span className="ms-2 text-gray-700"> {FormatCurrency(price)} </span>
                    </h1>
                </div>
                <div className="mt-auto">
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
}

export default StoreItem