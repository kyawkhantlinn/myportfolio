import React from "react";

const BurgerMenu = ({setter})=>{

    return (
        <div className="w-1/2 h-screen fixed z-10 left-0 top-0 p-2" style={{backgroundColor:"rgba(0,0,0,0.9)"}}>

            <button type="button" className="cursor-pointer text-3xl absolute right-4 top-0 hover:text-gray-300" onClick={()=>setter()}>&times;</button>

            <ul className="flex flex-col justify-center items-center space-y-10 py-4 mt-10">
                
                <li className="cursor-pointer hover:text-blue-400 transition-all duration-300">
                    <a href="#home" className="li-anchor p-0.5" >Home</a>
                </li>

                <li className="cursor-pointer hover:text-blue-400 transition-all duration-300">
                    <a href="#aboutme" className="li-anchor p-0.5">About Me</a>
                </li>

                <li className="cursor-pointer hover:text-blue-400 transition-all duration-300">
                    <a href="#toolkit" className="li-anchor p-0.5">My Toolkit</a>
                </li>

                <li className="cursor-pointer hover:text-blue-400 transition-all duration-300">
                    <a href="#mywork" className="li-anchor p-0.5">My Work</a>
                </li>
            </ul>

        </div>
    );
}

export default BurgerMenu;