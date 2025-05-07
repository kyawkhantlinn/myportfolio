import React from "react";
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


const ToolKit = ()=>{
    return (
        <section id="toolkit" className="bg-rose-900">
            <div className="container mx-auto px-4 py-12">

                <div className="text-center pb-6">
                    <h2 className="text-4xl text-white font-bold font-serif pb-4">My Toolkit</h2>
                    <p className="text-gray-300">These are the tools I currently use in my projects — and a few I'm actively exploring to level up my skills.</p>
                </div>

                <div className="flex justify-center items-center gap-10 gap-y-16 xl:gap-x-8 flex-wrap pt-6">
                    
                    <div className="w-[25%] xl:w-[23%] flex flex-col justify-center items-center space-y-4">
                        <div className="bg-red-600 shadow-red-600 rounded-full shadow-2xl hover:scale-110 transition duration-200 p-6">
                            <img src={html} width="100px" />
                        </div>
                        <p className="text-white text-center text-lg xl:text-2xl font-semibold">HTML</p>
                    </div>

                    <div className="w-[25%] xl:w-[23%] flex flex-col justify-center items-center space-y-4">
                        <div className="bg-blue-400 shadow-blue-600 rounded-full shadow-2xl hover:scale-110 transition duration-200 p-6">
                            <img src={css} width="100px" />
                        </div>
                        <p className="text-white text-center text-lg xl:text-2xl font-semibold">CSS</p>
                    </div>

                    <div className="w-[25%] xl:w-[23%] flex flex-col items-center space-y-4">
                        <div className="bg-yellow-500 shadow-yellow-600 rounded-full shadow-2xl hover:scale-110 transition duration-200 p-6">
                            <img src={js} width="100px" />
                        </div>
                        <p className="text-white text-center text-lg xl:text-2xl font-semibold">Javascript</p>
                    </div>
                    
                    <div className="w-[25%] xl:w-[23%] flex flex-col justify-center items-center space-y-4">
                        <div className="bg-gray-100 shadow-gray-600 rounded-full shadow-2xl hover:scale-110 transition duration-200 p-6">
                            <img src={bootstrap} width="100px" />
                        </div>
                        <p className="text-white text-center text-lg xl:text-2xl font-semibold">Bootstrap</p>
                    </div>

                    <div className="w-[25%] xl:w-[23%] flex flex-col justify-center items-center space-y-4">
                        <div className="bg-teal-800 shadow-teal-600 rounded-full shadow-2xl hover:scale-110 transition duration-200 p-6">
                            <img src={tailwind} width="100px" />
                        </div>
                        <p className="text-white text-center text-lg xl:text-2xl font-semibold">TailwindCSS</p>
                    </div>

                    <div className="w-[25%] xl:w-[23%] flex flex-col justify-center items-center space-y-4">
                        <div className="bg-orange-600 shadow-orange-600 rounded-full shadow-2xl hover:scale-110 transition duration-200 p-6">
                            <img src={firebase} width="100px" />
                        </div>
                        <p className="text-white text-center text-lg xl:text-2xl font-semibold">Firebase</p>
                    </div>

                    <div className="w-[25%] xl:w-[23%] flex flex-col justify-center items-center space-y-4">
                        <div className="bg-gray-100 shadow-gray-600 rounded-full shadow-2xl hover:scale-110 transition duration-200 p-6">
                            <img src={mysql} width="100px" />
                        </div>
                        <p className="text-white text-center text-lg xl:text-2xl font-semibold">MySQL</p>
                    </div>

                    <div className="w-[25%] xl:w-[23%] flex flex-col justify-center items-center space-y-4">
                        <div className="bg-gray-100 shadow-gray-600 rounded-full shadow-2xl hover:scale-110 transition duration-200 p-6">
                            <img src={reactjs} width="100px" />
                        </div>
                        <p className="text-white text-center text-lg xl:text-2xl font-semibold">Reactjs</p>
                    </div>

                    <div className="w-[25%] xl:w-[23%] flex flex-col justify-center items-center space-y-4">
                        <div className="bg-violet-900 shadow-violet-600 rounded-full shadow-2xl hover:scale-110 transition duration-200 p-6">
                            <img src={vite} width="100px" />
                        </div>
                        <p className="text-white text-center text-lg xl:text-2xl font-semibold">Vite</p>
                    </div>

                    <div className="w-[25%] xl:w-[23%] flex flex-col justify-center items-center space-y-4">
                        <div className="bg-gray-100 shadow-gray-600 rounded-full shadow-2xl hover:scale-110 transition duration-200 p-6">
                            <img src={github} width="100px" />
                        </div>
                        <p className="text-white text-center text-lg xl:text-2xl font-semibold">GitHub</p>
                    </div>

                    <div className="w-[25%] xl:w-[23%] flex flex-col justify-center items-center space-y-4">
                        <div className="bg-gray-100 shadow-gray-600 rounded-full shadow-2xl hover:scale-110 transition duration-200 p-6">
                            <img src={ts} width="100px" />
                        </div>
                        <p className="text-white text-center text-lg xl:text-2xl font-semibold">Typescript</p>
                    </div>

                    <div className="w-[25%] xl:w-[23%] flex flex-col justify-center items-center space-y-4">
                        <div className="bg-gray-100 shadow-gray-600 rounded-full shadow-2xl hover:scale-110 transition duration-200 p-6">
                            <img src={[python]} width="100px" />
                        </div>
                        <p className="text-white text-center text-lg xl:text-2xl font-semibold">Python</p>
                    </div>
                    
                </div>

            </div>
        </section>
    );
}

export default ToolKit;