import React, { useState } from "react";

import HTML from "./../assets/HTML.png";
import CSS from "./../assets/CSS.png";
import JavaScript from "./../assets/JavaScript.png";
import Bootstrap from "./../assets/Bootstrap.png";
import Tailwind from "./../assets/Tailwind.png";
import Firebase from "./../assets/Firebase.png";
import MySql from "./../assets/MySql.png";
import Reactjs from "./../assets/Reactjs.png";
import Vite from "./../assets/Vite.png";
import Github from "./../assets/Github.png";
import TypeScript from "./../assets/TypeScript.png";
import Python from "./../assets/Python.png";

const MyWordCard = ({state,handler,serial,title,techstack})=>{

    const images = {HTML,CSS,JavaScript,Bootstrap,Tailwind,Firebase,MySql,Reactjs,Vite,Github,TypeScript,Python};

    return (

        <div className="w-full p-5">
            {state === serial ? (
                <div className="bg-gradient-to-bl from-blue-700 via-transparent to-rose-700 border-1 border-gray-900 text-white rounded-xl cursor-pointer hover:scale-105 hover:shadow-2xl hover:shadow-violet-900 transition duration-200 p-4 ">

                    <h3 className="text-xl lg:text-2xl text-center font-semibold mb-6">{title}</h3>
                    <div className="text-lg flex justify-center items-center space-x-2">
                        <p className="hidden lg:flex text-gray-300">Tech Stack : </p>
                        {techstack.map((image,idx)=><img src={images[image]} width="40" key={idx} />)}
                    </div>

                </div>
            ) : (
                <div className="bg-transparent border-1 border-t-blue-700 border-r-blue-700 border-b-rose-700 border-l-rose-700 text-white rounded-xl cursor-pointer hover:scale-105 hover:shadow-2xl hover:shadow-violet-900 transition duration-200 px-4 py-4" onClick={()=>handler(serial)}>

                    <h3 className="text-xl lg:text-2xl text-center font-semibold mb-6">{title}</h3>
                    <div className="text-lg flex justify-center items-center space-x-2">
                        <p className="hidden lg:flex text-gray-300">Tech Stack : </p>
                        {techstack.map((image,idx)=><img src={images[image]} width="40" key={idx} />)}
                    </div>
                    
                </div>
            )}
        </div>

        
        
        

        

    );
}

export default MyWordCard;