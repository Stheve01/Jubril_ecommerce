import React from "react";
import {logo, cart, carts, furniture} from "../assets/index.jsx";

const Header = () => {
  return (
    <div className='w-flil h-22 bg-white border-b-[1px] border-b-gray-800'>
        <div className="max-w-screen-xl h-flil mx-auto flex items-center justify-between">
            <div className="w-28">
                <img src={logo} alt="logo" />
            </div>

            <div className="flex items-center gap-8">
                <ul className="flex items-center gap-8">
                    <li className="text-base text-black font-bold hover:text-orange-900
                    hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
                        Home
                    </li>
                    <li className="text-base text-black font-bold hover:text-orange-900
                    hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
                        Pages
                    </li>
                    <li className="text-base text-black font-bold hover:text-orange-900
                    hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
                        Shop
                    </li>
                    <li className="text-base text-black font-bold hover:text-orange-900
                    hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
                        Element
                    </li>
                    <li className="text-base text-black font-bold hover:text-orange-900
                    hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
                        Blog
                    </li>
                </ul>
                <div className="relative">
                    <img className="w-12" src={carts} alt="carts"/>
                    <span className="absolute w-5 top-[1px] left-5 text-sm flex items-center
                    justify-center font-semibold">
                        0
                    </span>
                </div>
                <img className="w-8 h-8 rounded-full" src={furniture} alt="furniture" />
        
            </div>
        </div>
      
     
    </div>
  )
}

export default Header
