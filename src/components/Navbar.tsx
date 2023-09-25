import {NavLink} from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartContext";

export function Navbar() {
    const {openCart, cartQuantity} = useShoppingCart()
  
    return (
        <div className="flex bg-slate-100 px-4 py-2 mb-8">
            <nav className="me-auto">
              <ul className="flex flex-row h-full items-center">
                <li className="px-8">
                <NavLink
                   to="/"
                  className={({isActive, isPending})=>
                isPending?'text-black':isActive?'text-blue-500':''}
                >
                  Home
                </NavLink>
                </li>
                <li className="pr-8">
                  <NavLink 
                    to="/store"
                    className={({isActive, isPending})=>
                    isPending?'text-black':isActive?'text-blue-500':''}
                  > Store
                  </NavLink>
                </li>
                <li className="">
                  <NavLink 
                    to="/about"
                    className={({isActive, isPending})=>
                    isPending?'text-black':isActive?'text-blue-500':''}
                  > About
                  </NavLink>
                </li>
              </ul>
            </nav>
            <button onClick={openCart} className="relative outline outline-1 outline-[#3366ff] rounded-full"> 
            <svg
              className="h-10 p-3"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#3366ff"
              stroke="indigo"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 11.35a2 2 0 0 0 1.92 1.5h10.8a2 2 0 0 0 1.92-1.5L23 5H6" />
            </svg>
            <div className="flex h-5 w-5 text-[14px] items-center justify-center bg-blue-500 text-white absolute rounded-full -right-0 -bottom-1 ">
              {cartQuantity}
            </div>
            </button>
        </div>
    );
}

