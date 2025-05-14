import React, { useState } from "react";

import html from "./../assets/html.png";
import css from "./../assets/css.png";
import js from "./../assets/js.png";
import bootstrap from "./../assets/bootstrap.png";
import tailwind from "./../assets/tailwind.png";
import firebase from "./../assets/firebase.png";
import mysql from "./../assets/mysql.png";
import reactjs from "./../assets/reactjs.png";
import vite from "./../assets/vite.png";
import github from "./../assets/github.png";
import ts from "./../assets/ts.png";
import python from "./../assets/python.png";

const MyWordCard = ({state,handler,serial,title,techstack})=>{

    const images = {html,css,js,bootstrap,tailwind,firebase,mysql,reactjs,vite,github,ts,python};

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