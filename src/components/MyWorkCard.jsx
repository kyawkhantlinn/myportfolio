import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export default function MyWorkCard(props){

    const {serial,title,techstack,thumbnail,caption,website,github,color} = props;

    const border = serial % 2 === 0 ? "border-r-6" : "border-l-6";
    
    let bordercolor = "";
    let shadow = "";
    let text = "";
    switch(color){
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
       
        <div className={`w-4/5 lg:w-2/5 bg-gray-800 rounded-2xl overflow-hidden flex flex-col group hover:scale-105 hover:shadow-xl ${shadow} transition duration-300 my-8`}>
    
            <div className="w-full relative overflow-hidden">
                <img src={thumbnail} alt="testimg" className="group-hover:scale-105 transition duration-300" />
                <div className="w-full h-1/5 text-gray-200 flex justify-around items-center absolute left-0 bottom-0 translate-y-16 group-hover:translate-y-0 transition duration-300" style={{backgroundColor:"rgba(0,0,0,0.5)"}}>
                <a href={website} target="_blank" className={`${text}`}>Click to Visit <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
                <a href={github} target="_blank" className={`${text}`}>GitHub Repo <FontAwesomeIcon icon={faGithub} /></a>
                </div>
            </div>
                                    
            <div className={`w-full ${border} ${bordercolor} px-4`}>
                <h2 className="text-white text-xl font-semibold text-center my-6">{title}</h2>
                <ul className="text-sm text-gray-200 space-y-3 mb-6">
                    <li>- {caption}</li>
                    <li className="flex">- Tech stack : 
                        {techstack.map((value,idx)=>(
                            <img src={value[0]} alt={value[1]} width="25" className="ms-2" key={idx} />
                        ))}
                    </li>
                    <li>
                        <a href={website} target="_blank" className={`${text}`}>- Click to Visit <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
                    </li>
                    <li>
                        <a href={github} target="_blank" className={`${text}`}>- GitHub Repo <FontAwesomeIcon icon={faGithub} /></a>
                    </li>
                </ul>             
            </div>
    
        </div>
    
    );
}