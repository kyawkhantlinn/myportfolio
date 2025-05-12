import React from "react";

const AboutMeText = ()=>{
    return (
        <div className="w-full lg:w-1/2 lg:text-lg xl:text-xl text-white space-y-6 lg:space-y-10">

            <div className="overflow-hidden relative">
                <p>I'm a frontend developer based in Yangon.</p>
                <div className="w-full h-full bg-gray-900 absolute left-0 top-0 about-text"></div>
            </div>

            <div className="overflow-hidden relative">
                <p>I build modern, responsive websites using <span className="font-bold text-blue-400">React</span>, <span className="font-bold text-blue-400">Tailwind CSS</span> and other tools. I love creating intuitive user experiences and clean, accessible interfaces.</p>
                <div className="w-full h-full bg-gray-900 absolute left-0 top-0 about-text" style={{animationDelay:"0.25s"}}></div>
            </div>

            <div className="overflow-hidden relative">
                <p>I’m currently exploring <span className="font-bold text-indigo-400">Typescript</span> and <span className="font-bold text-yellow-300">Python</span>, and I’m always learning something new.</p>
                <div className="w-full h-full bg-gray-900 absolute left-0 top-0 about-text" style={{animationDelay:"0.5s"}}></div>
            </div>

            <div className="overflow-hidden relative">
                <p>Outside of coding, I love listening to music. It really helps me think.</p>
                <div className="w-full h-full bg-gray-900 absolute left-0 top-0 about-text" style={{animationDelay:"1s"}}></div>
            </div>
        </div>
    );
}

export default AboutMeText;