import React,{useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'

import BurgerMenu from "./BurgerMenu";

const NavBar = ()=>{

    const [burgerState,setBurgerState] = useState(false);

    const burgerClick = ()=>{
        setBurgerState(!burgerState);
    }

    return (
        <div className="relative">
            <nav className="w-full bg-gradient-to-b from-gray-900 to-sky-900 fixed z-20">
                <div className="text-white text-lg flex px-2 py-3 md:px-4 md:py-6">

                    <div className="w-full hidden md:flex">

                        <div className="w-1/5 xl:w-2/5"></div>

                        <ul className="w-4/5 xl:w-3/5 flex justify-around items-center">

                            <li className="cursor-pointer hover:-translate-y-0.5 transition duration-200">
                                <a href="#home" className="border-2 border-transparent hover:border-sky-500 rounded-md transition duration-200 px-3 py-2">Home</a>
                            </li>
                            
                            <li className="cursor-pointer hover:-translate-y-0.5 transition duration-200">
                                <a href="#aboutme" className="border-2 border-transparent hover:border-sky-500 rounded-md transition duration-200 px-3 py-2">About Me</a>
                            </li>

                            <li className="cursor-pointer hover:-translate-y-0.5 transition duration-200">
                                <a href="#toolkit" className="border-2 border-transparent hover:border-sky-500 rounded-md transition duration-200 px-3 py-2">My Toolkit</a>
                            </li>

                            <li className="cursor-pointer hover:-translate-y-0.5 transition duration-200">
                                <a href="#mywork" className="border-2 border-transparent hover:border-sky-500 rounded-md transition duration-200 px-3 py-2">My Work</a>
                            </li>

                            <li className="cursor-pointer hover:-translate-y-0.5 transition duration-200">
                                <a href="#contactme" className="bg-gradient-to-br from-teal-600 to-sky-400 hover:bg-gradient-to-b rounded px-3 py-2">Contact Me</a>
                            </li>

                        </ul>

                    </div>

                    <div className="w-full md:hidden text-white flex justify-between items-center px-6">
                        <div>
                            <button type="button" className="cursor-pointer text-2xl hover:text-gray-300" onClick={()=>burgerClick()}>
                                {burgerState === false &&  <FontAwesomeIcon icon={faBars} />}
                            </button>
                            {burgerState === true && <BurgerMenu setter={burgerClick} />}
                        </div>
                        <div className="flex justify-center items-center">
                            <a href="#contactme" className="text-sm bg-gradient-to-br from-teal-600 to-sky-400 hover:bg-gradient-to-b rounded cursor-pointer px-3 py-2">Contact Me</a>
                        </div>
                    </div>

                </div>
            </nav>
        </div>
    );
}

export default NavBar;