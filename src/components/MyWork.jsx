import React from "react";

import datas from "./../assets/mywork.json"
import MyWorkCard from "./MyWorkCard";

const MyWork = ()=>{

    // console.log(datas);

    return (
        <section id="mywork" className="bg-gray-900">
            <div className="container mx-auto px-4 py-28" >

                <div className="text-center pb-6">
                    <h2 className="text-4xl text-white font-bold font-serif pb-4">My Work</h2>
                    <p className="text-gray-300">Here are some of the projects I’ve worked on — from small experiments to fully responsive websites.</p>
                </div>

                <div className="flex flex-wrap justify-evenly items-center mt-12">

                    {datas.map((data,idx)=>(
                        <MyWorkCard serial={data.serial} title={data.title} techstack={data.techstack} thumbnail={data.thumbnail} caption={data.caption} website={data.website} github={data.github} color={data.color} key={idx} />
                    ))}

                </div>

            </div>            
        </section>
    );
}

export default MyWork;
