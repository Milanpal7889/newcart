import {NavLink} from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartContext";

export function Navbar() {
    const {openCart, cartQuantity} = useShoppingCart()
  
    return (
        <div className="flex">
            <nav className="me-auto">
              <ul className="flex">
                <li className="pr-4">
                <NavLink
                   to="/"
                  className={({isActive, isPending})=>
                isPending?'text-black':isActive?'text-blue-500':''}
                >
                  Home
                </NavLink>
                </li>
                <li className="pr-4">
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
              className="h-12 p-3"
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
            <div className="flex h-8 w-8 items-center justify-center bg-black text-white absolute rounded-full -right-3 top-7">
              {cartQuantity}
            </div>
            </button>
        </div>
    );
}

