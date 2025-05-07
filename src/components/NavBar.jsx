import React,{useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'

const NavBar = ()=>{

    const [burgerState,setBurgerState] = useState(false);

    const burgerClick = (e)=>{
        e.target.closest("button").classList.toggle("hidden");
        setBurgerState(!burgerState);
    }

    // console.log(burgerState);

    return (
        <nav className="bg-gradient-to-b from-gray-900 to-sky-900">
            <div className="container mx-auto text-white text-lg flex px-2 py-3 xl:px-4 xl:py-6">

                <div className="w-full hidden xl:flex">

                    <div className="w-2/5"></div>

                    <ul className="w-3/5 flex justify-around items-center">

                        <li href="#home" className="cursor-pointer hover:-translate-y-0.5 transition duration-200">
                            <a className="border-2 border-transparent hover:border-sky-500 rounded-md transition duration-200 px-3 py-2">Home</a>
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
                            <a className="bg-gradient-to-br from-teal-600 to-sky-400 hover:bg-gradient-to-b rounded px-3 py-2">Contact Me</a>
                        </li>

                    </ul>

                </div>

                <div className="w-full xl:hidden text-white flex justify-between items-center px-6">
                    <button type="button" className="cursor-pointer text-2xl" onClick={(e)=>burgerClick(e)}>
                        <FontAwesomeIcon icon={faBars} />
                    </button>
                    {/* {burgerState ? <MenuBar /> : <div></div>} */}
                    <button type="button" className="text-sm bg-gradient-to-br from-teal-600 to-sky-400 hover:bg-gradient-to-b rounded cursor-pointer px-3 py-2">Contact Me</button>
                </div>

            </div>
        </nav>
    );
}

export default NavBar;