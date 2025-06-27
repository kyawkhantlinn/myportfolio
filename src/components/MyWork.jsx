import React, { useState } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import datas from "./../assets/mywork.json"

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

                    {datas.map((data,idx)=>{

                        const border = data.serial % 2 === 0 ? "border-r-6" : "border-l-6";

                        let bordercolor = "";
                        let shadow = "";
                        let text = "";
                        switch(data.color){
                            case "red":
                                bordercolor = "border-red-600"
                                shadow = "shadow-red-900"
                                text = "hover:text-red-500"
                                break;
                            case "green":
                                bordercolor = "border-green-600"
                                shadow = "shadow-green-900"
                                text = "hover:text-green-500"
                                break;
                            case "blue":
                                bordercolor = "border-blue-600"
                                shadow = "shadow-blue-900"
                                text = "hover:text-blue-500"
                                break;
                            case "yellow":
                                bordercolor = "border-yellow-600"
                                shadow = "shadow-yellow-900"
                                text = "hover:text-yellow-500"
                                break;
                            case "orange":
                                bordercolor = "border-orange-600"
                                shadow = "shadow-orange-900"
                                text = "hover:text-orange-500"
                                break;
                        }

                        return (
                        
                            <div className={`w-4/5 lg:w-2/5 bg-gray-800 rounded-2xl overflow-hidden flex flex-col group hover:scale-105 hover:shadow-xl ${shadow} transition duration-300 my-8`} key={idx}>

                                <div className="w-full relative overflow-hidden">
                                    <img src={data.thumbnail} alt="testimg" className="group-hover:scale-105 transition duration-300" />
                                    <div className="w-full h-1/5 text-gray-200 flex justify-around items-center absolute left-0 bottom-0 translate-y-16 group-hover:translate-y-0 transition duration-300" style={{backgroundColor:"rgba(0,0,0,0.5)"}}>
                                        <a href={data.websitelink} target="_blank" className={`${text}`}>Click to Visit <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
                                        <a href={data.githublink} target="_blank" className={`${text}`}>GitHub Repo <FontAwesomeIcon icon={faGithub} /></a>
                                        </div>
                                </div>
                                
                                <div className={`w-full ${border} ${bordercolor} px-4`}>
                                    <h4 className="text-white text-xl font-semibold text-center my-6">{data.title}</h4>
                                    <ul className="text-sm text-gray-200 space-y-3 mb-6">
                                        <li>- {data.caption}</li>
                                        <li className="flex">- Tech stack : 
                                            {data.techstack.map((value,idx)=>(
                                                <img src={value[0]} alt={value[1]} width="25" className="ms-3" key={idx} />
                                            ))}
                                            {/* <img src="./images/vite.png" alt="testimg" width="25" className="ms-3" />
                                            <img src="./images/bootstrap.png" alt="testimg" width="25" className="ms-3" />
                                            <img src="./images/react.svg" alt="testimg" width="25" className="ms-3" /> */}
                                        </li>
                                        <li>
                                            <a href={data.websitelink} target="_blank" className={`${text}`}>- Click to Visit <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
                                        </li>
                                        <li>
                                            <a href={data.githublink} target="_blank" className={`${text}`}>- GitHub Repo <FontAwesomeIcon icon={faGithub} /></a>
                                        </li>
                                    </ul>
                                    
                                </div>

                            </div>

                    )})}

                    {/* <div className="w-4/5 lg:w-2/5 bg-gray-800 rounded-2xl overflow-hidden flex flex-col group hover:scale-105 hover:shadow-xl shadow-red-900 transition duration-500">
                            <div className="w-full relative overflow-hidden">
                                <img src="./images/vscode.png" alt="testimg" className="group-hover:scale-105 transition duration-300" />
                                <div className="w-full h-1/5 text-gray-200 flex justify-around items-center absolute left-0 bottom-0 translate-y-16 group-hover:translate-y-0 transition duration-500" style={{backgroundColor:"rgba(0,0,0,0.5)"}}>
                                    <a href={displaydata[0].websitelink} target="_blank" className="hover:text-red-500">Click to Visit <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
                                    <a href={displaydata[0].githublink} target="_blank" className="hover:text-red-500">GitHub Repo <FontAwesomeIcon icon={faGithub} /></a>
                                    </div>
                                </div>
                            <div className="w-full border-l-6 border-red-600 px-4">
                                <h4 className="text-white text-xl font-semibold text-center my-6">Blue Crescent Chatroom</h4>
                                <ul className="text-sm text-gray-200 space-y-3 mb-6">
                                    <li>- Simple chat app with user authentication and live messaging</li>
                                    <li className="flex">- Tech stack : 
                                        <img src="./images/vite.png" alt="testimg" width="25" className="ms-3" />
                                        <img src="./images/bootstrap.png" alt="testimg" width="25" className="ms-3" />
                                        <img src="./images/react.svg" alt="testimg" width="25" className="ms-3" />
                                    </li>
                                    <li>
                                        <a href={displaydata[0].websitelink} target="_blank" className="hover:text-red-500">- Click to Visit <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
                                    </li>
                                    <li>
                                        <a href={displaydata[0].githublink} target="_blank" className="hover:text-red-500">- GitHub Repo <FontAwesomeIcon icon={faGithub} /></a>
                                    </li>
                                </ul>
                                
                            </div>
                    </div> */}

                </div>

            </div>            
        </section>
    );
}

export default MyWork;
