import React from "react";
import avatar from "./../assets/profile.png"
import bg from "./../assets/bgs/techbg6.jpg"

const Home = ()=>{

    return (
        <section id="home" style={{backgroundImage:`url(${bg})`,backgroundSize:"cover",backgroundPosition:"center",backgroundAttachment:"fixed"}}>

            <div className="flex flex-col md:flex-row items-center px-4 py-20 overflow-x-hidden">

                <div className="w-1/3 mx-auto avatar">
                    <img src={avatar} />
                </div>
                <div className="w-full md:w-1/2 space-y-10 mx-auto py-6 intro">
                    <h1 className="xl:text-4xl text-3xl text-white text-center font-bold">Hi. I'm Kyaw Khant Linn. 👋</h1>
                    <p className="lg:text-xl text-center text-gray-200">I’m a frontend developer with a keen eye for detail and a strong focus on user experience. I care about performance, accessibility, and writing clean, maintainable code. My go-to stack includes <span className="text-blue-400 font-bold">React</span>, <span className="text-blue-400 font-bold">Tailwind CSS</span>, and a sprinkle of animation magic.</p>
                </div>

            </div>

        </section>
    );
}

export default Home;