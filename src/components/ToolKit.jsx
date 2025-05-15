import React from "react";

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


const ToolKit = ()=>{
    return (
        <section id="toolkit" className="bg-rose-900">
            <div className="container mx-auto px-4 py-12">

                <div className="text-center pb-6">
                    <h2 className="text-4xl text-white font-bold font-serif pb-4">My Toolkit</h2>
                    <p className="text-gray-300">These are the tools I currently use in my projects — and a few I'm actively exploring to level up my skills.</p>
                </div>

                <div className="flex justify-center items-center gap-10 gap-y-16 xl:gap-x-8 flex-wrap pt-6">
                    
                    <div className="w-[30%] md:w-[23%] flex flex-col justify-center items-center space-y-4">
                        <div className="bg-red-600 shadow-red-600 rounded-full shadow-2xl hover:scale-110 transition duration-200 p-6">
                            <img src={HTML} width="100px" />
                        </div>
                        <p className="text-white text-center text-lg xl:text-2xl font-semibold">HTML</p>
                    </div>

                    <div className="w-[30%] md:w-[23%] flex flex-col justify-center items-center space-y-4">
                        <div className="bg-blue-400 shadow-blue-600 rounded-full shadow-2xl hover:scale-110 transition duration-200 p-6">
                            <img src={CSS} width="100px" />
                        </div>
                        <p className="text-white text-center text-lg xl:text-2xl font-semibold">CSS</p>
                    </div>

                    <div className="w-[30%] md:w-[23%] flex flex-col items-center space-y-4">
                        <div className="bg-yellow-500 shadow-yellow-600 rounded-full shadow-2xl hover:scale-110 transition duration-200 p-6">
                            <img src={JavaScript} width="100px" />
                        </div>
                        <p className="text-white text-center text-lg xl:text-2xl font-semibold">Javascript</p>
                    </div>
                    
                    <div className="w-[30%] md:w-[23%] flex flex-col justify-center items-center space-y-4">
                        <div className="bg-gray-100 shadow-gray-600 rounded-full shadow-2xl hover:scale-110 transition duration-200 p-6">
                            <img src={Bootstrap} width="100px" />
                        </div>
                        <p className="text-white text-center text-lg xl:text-2xl font-semibold">Bootstrap</p>
                    </div>

                    <div className="w-[30%] md:w-[23%] flex flex-col justify-center items-center space-y-4">
                        <div className="bg-teal-800 shadow-teal-600 rounded-full shadow-2xl hover:scale-110 transition duration-200 p-6">
                            <img src={Tailwind} width="100px" />
                        </div>
                        <p className="text-white text-center text-lg xl:text-2xl font-semibold">TailwindCSS</p>
                    </div>

                    <div className="w-[30%] md:w-[23%] flex flex-col justify-center items-center space-y-4">
                        <div className="bg-orange-600 shadow-orange-600 rounded-full shadow-2xl hover:scale-110 transition duration-200 p-6">
                            <img src={Firebase} width="100px" />
                        </div>
                        <p className="text-white text-center text-lg xl:text-2xl font-semibold">Firebase</p>
                    </div>

                    <div className="w-[30%] md:w-[23%] flex flex-col justify-center items-center space-y-4">
                        <div className="bg-gray-100 shadow-gray-600 rounded-full shadow-2xl hover:scale-110 transition duration-200 p-6">
                            <img src={MySql} width="100px" />
                        </div>
                        <p className="text-white text-center text-lg xl:text-2xl font-semibold">MySQL</p>
                    </div>

                    <div className="w-[30%] md:w-[23%] flex flex-col justify-center items-center space-y-4">
                        <div className="bg-gray-100 shadow-gray-600 rounded-full shadow-2xl hover:scale-110 transition duration-200 p-6">
                            <img src={Reactjs} width="100px" />
                        </div>
                        <p className="text-white text-center text-lg xl:text-2xl font-semibold">Reactjs</p>
                    </div>

                    <div className="w-[30%] md:w-[23%] flex flex-col justify-center items-center space-y-4">
                        <div className="bg-violet-900 shadow-violet-600 rounded-full shadow-2xl hover:scale-110 transition duration-200 p-6">
                            <img src={Vite} width="100px" />
                        </div>
                        <p className="text-white text-center text-lg xl:text-2xl font-semibold">Vite</p>
                    </div>

                    <div className="w-[30%] md:w-[23%] flex flex-col justify-center items-center space-y-4">
                        <div className="bg-gray-100 shadow-gray-600 rounded-full shadow-2xl hover:scale-110 transition duration-200 p-6">
                            <img src={Github} width="100px" />
                        </div>
                        <p className="text-white text-center text-lg xl:text-2xl font-semibold">GitHub</p>
                    </div>

                    <div className="w-[30%] md:w-[23%] flex flex-col justify-center items-center space-y-4">
                        <div className="bg-gray-100 shadow-gray-600 rounded-full shadow-2xl hover:scale-110 transition duration-200 p-6">
                            <img src={TypeScript} width="100px" />
                        </div>
                        <p className="text-white text-center text-lg xl:text-2xl font-semibold">Typescript</p>
                    </div>

                    <div className="w-[30%] md:w-[23%] flex flex-col justify-center items-center space-y-4">
                        <div className="bg-gray-100 shadow-gray-600 rounded-full shadow-2xl hover:scale-110 transition duration-200 p-6">
                            <img src={Python} width="100px" />
                        </div>
                        <p className="text-white text-center text-lg xl:text-2xl font-semibold">Python</p>
                    </div>
                    
                </div>

            </div>
        </section>
    );
}

export default ToolKit;