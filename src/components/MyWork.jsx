import React from "react";
import bg from "./../assets/techbg5.jpg";
import vscode from "./../assets/vscode.png";

import tailwind from "./../assets/tailwind.png";
import firebase from "./../assets/firebase.png";
import vite from "./../assets/vite.png";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import MyWordCard from "./MyWorkCard";

const MyWork = ()=>{
    return (
        <section id="mywork" style={{backgroundImage:`url(${bg})`,backgroundSize:"cover",backgroundPosition:"center",backgroundAttachment:"fixed"}}>
            <div className="px-4 py-12" style={{backgroundColor:"rgba(0,0,0,0.3)"}}>

                <div className="text-center pb-6">
                    <h2 className="text-4xl text-white font-bold font-serif pb-4">My Work</h2>
                    <p className="text-gray-300">Here are some of the projects I’ve worked on — from small experiments to fully responsive websites.</p>
                </div>

                <div className="flex justify-center items-center">
                    
                    <div className="w-1/2 flex flex-wrap justify-evenly space-y-12 py-8">

                        <MyWordCard />
                        <MyWordCard />
                        <MyWordCard />

                    </div>

                    <div className="w-1/2 flex justify-center items-center">

                        <div className="w-3/4 space-y-4 py-6">
                            <div className="relative overflow-hidden group">
                                <img src={vscode} className="rounded-xl"/>
                                <div className="w-full h-1/6 text-white flex justify-around items-center absolute left-0 bottom-0 translate-y-13 group-hover:translate-y-0 transition duration-300" style={{backgroundColor:"rgba(0,0,0,0.5)"}}>
                                    <a href="javascript:void(0);" className="hover:text-blue-500">Click to Visit <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
                                    <a href="javascript:void(0);" className="hover:text-blue-500">GitHub Repo <FontAwesomeIcon icon={faGithub} /></a>
                                </div>
                            </div>
                            <div>
                                <h2  className="text-white text-center font-semibold text-xl">Blue Crescent Chatroom</h2>
                                <ul className="text-gray-300 list-disc space-y-3 pt-5">
                                    <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                                    <li><b>Tech Stack</b> : Tailwind, Firebase, Vite</li>
                                    <li><a href="javascript:void(0);" className="hover:text-blue-500">Click to Visit <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a></li>
                                    <li><a href="javascript:void(0);" className="hover:text-blue-500">GitHub Repo <FontAwesomeIcon icon={faGithub} /></a></li>
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