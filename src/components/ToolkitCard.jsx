import React from "react";

export default function ToolkitCard(props){
    
    const {isLearning,image,alt,name,percent,color} = props;

    let hover = "";
    let bg = "";
    let width = "";

    switch(color){
        case "orange":
            hover = "group-hover:shadow-orange-600";
            bg = "bg-orange-500";
            break;
        case "blue":
            hover = "group-hover:shadow-blue-700";
            bg = "bg-blue-600";
            break;
        case "yellow":
            hover = "group-hover:shadow-yellow-500";
            bg = "bg-yellow-400";
            break;
        case "purple":
            hover = "group-hover:shadow-purple-700";
            bg = "bg-purple-600";
            break;
        case "cyan":
            hover = "group-hover:shadow-cyan-600";
            bg = "bg-cyan-500";
            break;
        case "sky":
            hover = "group-hover:shadow-sky-600";
            bg = "bg-sky-500";
            break;
        case "white":
            hover = "group-hover:shadow-gray-400";
            bg = "bg-gray-300";
            break;
    }

    switch(percent){
        case 30:
            width = "w-[30%]";
            break;
        case 45:
            width = "w-[45%]";
            break;
        case 55:
            width = "w-[55%]";
            break; 
        case 60:
            width = "w-[60%]";
            break; 
        case 60:
            width = "w-[60%]";
            break; 
        case 65:
            width = "w-[65%]";
            break; 
        case 70:
            width = "w-[70%]";
            break; 
        case 75:
            width = "w-[75%]";
            break;
        case 80:
            width = "w-[80%]";
            break;
        case 85:
            width = "w-[85%]";
            break;
    }

    return (
        <div className="w-2/5 md:w-3/10 lg:w-1/5 h-[200px] bg-neutral-900 rounded-xl flex flex-col justify-center items-center hover:-translate-y-4 hover:shadow-lg hover:shadow-neutral-800 hover:scale-105 transition ease-in-out duration-300 p-4 group">
            <img src={image} alt={alt} width="50" />
            <div className="w-full p-2">
                <p className="text-white text-center text-xl font-semibold tracking-wide mb-3">{name}</p>
                {isLearning ? <p className="text-gray-400 text-center">Still Learning</p> : <p className="text-gray-400 text-center">Proficiency : {percent}%</p>}
                <div className={`w-full h-3 bg-neutral-700 rounded-full overflow-hidden group-hover:shadow-xl ${hover} mt-2`}>
                    <div className={`${width} h-full ${bg}`}></div>
                </div>
            </div>
        </div>
    );
}