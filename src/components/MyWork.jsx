import React, { useState } from "react";

import bg from "./../assets/bgs/techbg5.jpg";
import landingpagegif from "./../assets/gifs/landingpage.gif";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import MyWorkCard from "./MyWorkCard";
import datas from "./../assets/datas.json"
import MyWordCard from "./MyWorkCard";

const MyWork = ()=>{

    const [dataState,getDataState] = useState("1");

    const displaydata = datas.filter(data=>data.serial === dataState);
    console.log(displaydata);

    return (
        <section id="mywork" style={{backgroundImage:`url(${bg})`,backgroundSize:"cover",backgroundPosition:"center",backgroundAttachment:"fixed"}}>
            <div className="px-4 py-12" style={{backgroundColor:"rgba(0,0,0,0.3)"}}>

                <div className="text-center pb-6">
                    <h2 className="text-4xl text-white font-bold font-serif pb-4">My Work</h2>
                    <p className="text-gray-300">Here are some of the projects I’ve worked on — from small experiments to fully responsive websites.</p>
                </div>

                <div className="flex flex-col lg:flex-row justify-center items-center">

                    <div className="w-full lg:w-1/2 flex flex-wrap justify-evenly py-8">
                        {datas.map((data,idx)=>(
                            <div className="w-11/12 md:w-1/2 lg:w-11/12 xl:w-1/2 flex justify-center items-center" key={idx}>
                                <MyWordCard state={dataState} handler={getDataState} serial={data.serial} title={data.title} techstack={data.techstack} />
                            </div>
                        ))}
                    </div>

                    <div className="w-full lg:w-1/2 flex justify-center items-center">

                        <div className="w-3/4 space-y-4 py-6">
                            <div className="relative overflow-hidden group">
                                <img src={landingpagegif} className="rounded-xl"/>
                                <div className="w-full h-1/6 text-white flex justify-around items-center absolute left-0 bottom-0 translate-y-13 group-hover:translate-y-0 transition duration-300" style={{backgroundColor:"rgba(0,0,0,0.5)"}}>
                                    <a href={displaydata[0].websitelink} target="_blank" className="hover:text-blue-500">Click to Visit <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
                                    <a href={displaydata[0].githublink} target="_blank" className="hover:text-blue-500">GitHub Repo <FontAwesomeIcon icon={faGithub} /></a>
                                </div>
                            </div>
                            <div className="mt-4">
                                <h2  className="text-white text-center font-semibold text-xl">{displaydata[0].title}</h2>
                                <ul className="text-gray-300 list-disc space-y-3 pt-5">
                                    <li>{displaydata[0].caption}</li>
                                    <li><b>Tech Stack</b> : <span>{displaydata[0].techstack.join(" , ")}</span></li>
                                    <li><a href={displaydata[0].websitelink} target="_blank" className="hover:text-blue-500">Click to Visit <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a></li>
                                    <li><a href={displaydata[0].githublink} target="_blank" className="hover:text-blue-500">GitHub Repo <FontAwesomeIcon icon={faGithub} /></a></li>
                                </ul>
                            </div>
                        </div>
                    
                    </div>

                </div>

            </div>            
        </section>
    );
}

export default MyWork;