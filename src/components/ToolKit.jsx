import React from "react";

import ToolkitCard from "./ToolkitCard";
import datas from "./../assets/toolkit.json";


const ToolKit = ()=>{

    console.log(datas);

    return (
        <section id="toolkit" className="bg-rose-900">
            <div className="container mx-auto px-4 py-28">

                <div className="text-center mb-12">
                    <h2 className="text-4xl text-white font-bold font-serif pb-4">My Toolkit</h2>
                    <p className="text-gray-300">These are the tools I currently use in my projects — and a few I'm actively exploring to level up my skills.</p>
                </div>

                {/* <div className="flex justify-center items-center gap-10 gap-y-16 xl:gap-x-8 flex-wrap mt-12">
                    
                    <div className="w-[30%] md:w-[23%] flex flex-col justify-center items-center space-y-4">
                        <div className="bg-gray-100 shadow-gray-600 rounded-full shadow-2xl hover:scale-110 transition duration-200 p-6">
                            <img src={Bootstrap} alt="Bootstrap" width="100px" />
                        </div>
                        <p className="text-white text-center text-lg xl:text-2xl font-semibold">Bootstrap</p>
                    </div>

                    <div className="w-[30%] md:w-[23%] flex flex-col justify-center items-center space-y-4">
                        <div className="bg-teal-800 shadow-teal-600 rounded-full shadow-2xl hover:scale-110 transition duration-200 p-6">
                            <img src={Tailwind} alt="Tailwind" width="100px" />
                        </div>
                        <p className="text-white text-center text-lg xl:text-2xl font-semibold">TailwindCSS</p>
                    </div>

                    <div className="w-[30%] md:w-[23%] flex flex-col justify-center items-center space-y-4">
                        <div className="bg-orange-600 shadow-orange-600 rounded-full shadow-2xl hover:scale-110 transition duration-200 p-6">
                            <img src={Firebase} alt="Firebase" width="100px" />
                        </div>
                        <p className="text-white text-center text-lg xl:text-2xl font-semibold">Firebase</p>
                    </div>

                    <div className="w-[30%] md:w-[23%] flex flex-col justify-center items-center space-y-4">
                        <div className="bg-gray-100 shadow-gray-600 rounded-full shadow-2xl hover:scale-110 transition duration-200 p-6">
                            <img src={MySql} alt="MySql" width="100px" />
                        </div>
                        <p className="text-white text-center text-lg xl:text-2xl font-semibold">MySQL</p>
                    </div>

                    <div className="w-[30%] md:w-[23%] flex flex-col justify-center items-center space-y-4">
                        <div className="bg-gray-100 shadow-gray-600 rounded-full shadow-2xl hover:scale-110 transition duration-200 p-6">
                            <img src={Reactjs} alt="Reactjs" width="100px" />
                        </div>
                        <p className="text-white text-center text-lg xl:text-2xl font-semibold">Reactjs</p>
                    </div>

                    <div className="w-[30%] md:w-[23%] flex flex-col justify-center items-center space-y-4">
                        <div className="bg-violet-900 shadow-violet-600 rounded-full shadow-2xl hover:scale-110 transition duration-200 p-6">
                            <img src={Vite} alt="Vite" width="100px" />
                        </div>
                        <p className="text-white text-center text-lg xl:text-2xl font-semibold">Vite</p>
                    </div>

                    <div className="w-[30%] md:w-[23%] flex flex-col justify-center items-center space-y-4">
                        <div className="bg-gray-100 shadow-gray-600 rounded-full shadow-2xl hover:scale-110 transition duration-200 p-6">
                            <img src={Github} alt="Github" width="100px" />
                        </div>
                        <p className="text-white text-center text-lg xl:text-2xl font-semibold">GitHub</p>
                    </div>

                    <div className="w-[30%] md:w-[23%] flex flex-col justify-center items-center space-y-4">
                        <div className="bg-gray-100 shadow-gray-600 rounded-full shadow-2xl hover:scale-110 transition duration-200 p-6">
                            <img src={TypeScript} alt="TypeScript" width="100px" />
                        </div>
                        <p className="text-white text-center text-lg xl:text-2xl font-semibold">Typescript</p>
                    </div>

                    <div className="w-[30%] md:w-[23%] flex flex-col justify-center items-center space-y-4">
                        <div className="bg-gray-100 shadow-gray-600 rounded-full shadow-2xl hover:scale-110 transition duration-200 p-6">
                            <img src={Python} alt="Python" width="100px" />
                        </div>
                        <p className="text-white text-center text-lg xl:text-2xl font-semibold">Python</p>
                    </div>
                    
                </div> */}

                <div className="flex flex-wrap justify-center items-center gap-8">

                    {datas.map((data,idx)=> <ToolkitCard isLearning={data.isLearning} image={data.image} alt={data.alt} name={data.name} percent={data.percent} color={data.color} key={idx} /> )}

                </div>

            </div>
        </section>
    );
}

export default ToolKit;