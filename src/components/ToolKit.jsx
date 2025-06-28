import React from "react";

import ToolkitCard from "./ToolkitCard";
import datas from "./../assets/toolkit.json";


const ToolKit = ()=>{

    // console.log(datas);

    return (
        <section id="toolkit" className="bg-rose-900">
            <div className="container mx-auto px-4 py-28">

                <div className="text-center mb-12">
                    <h2 className="text-4xl text-white font-bold font-serif pb-4">My Toolkit</h2>
                    <p className="text-gray-300">These are the tools I currently use in my projects — and a few I'm actively exploring to level up my skills.</p>
                </div>

                <div className="flex flex-wrap justify-center items-center gap-8">

                    {datas.map((data,idx)=> <ToolkitCard isLearning={data.isLearning} image={data.image} alt={data.alt} name={data.name} percent={data.percent} color={data.color} key={idx} /> )}

                </div>

            </div>
        </section>
    );
}

export default ToolKit;