import React from "react";
import avatar from "./../assets/profile.webp"
import bg from "./../assets/bgs/bg1.webp"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub,faFacebook,faTelegram,faViber } from '@fortawesome/free-brands-svg-icons';

const Home = ()=>{

    return (
        <section id="home" style={{backgroundImage:`url(${bg})`,backgroundSize:"cover",backgroundPosition:"center",backgroundAttachment:"fixed"}}>

            <div className="flex flex-col md:flex-row items-center px-4 pt-36 pb-20 overflow-x-hidden" style={{backgroundColor:"rgba(0,0,0,0.3)"}}>

                <div className="w-1/3 mx-auto avatar">
                    <img src={avatar} alt="avatar" />
                </div>

                <div className="w-full md:w-1/2 space-y-10 flex flex-col justify-center items-center mx-auto py-6 intro">

                    <h1 className="xl:text-4xl text-3xl text-white text-center font-bold">Hi! I'm Kyaw Khant Linn. 👋</h1>
                    <p className="lg:text-xl text-center text-gray-200">I’m a frontend developer with a keen eye for detail and a strong focus on user experience. I care about performance, accessibility, and writing clean, maintainable code. My go-to stack includes <span className="text-blue-400 font-bold">React</span>, <span className="text-blue-400 font-bold">Tailwind CSS</span>, and a sprinkle of animation magic.</p>
                    <ul className="w-2/3 lg:w-1/2 text-2xl text-gray-200 flex justify-around items-center">

                        <li><a href="https://github.com/kyawkhantlinn" className="hover:text-blue-500 transition duration-200 px-4 py-2" aria-label="gitHub"><FontAwesomeIcon icon={faGithub} /></a></li>
                    
                        <li><a href="https://www.facebook.com/profile.php?id=100051607762245&mibextid=ZbWKwL" className="hover:text-blue-500 transition duration-200 px-4 py-2" aria-label="facebook"><FontAwesomeIcon icon={faFacebook} /></a></li>
                    
                        <li><a href="https://t.me/AustinTheGoatxD" className="hover:text-blue-500 transition duration-200 px-4 py-2" aria-label="telegram"><FontAwesomeIcon icon={faTelegram} /></a></li>
                    
                        <li><a href="viber://chat?number=%2B959780319178" className="hover:text-blue-500 transition duration-200 px-4 py-2" aria-label="viber"><FontAwesomeIcon icon={faViber} /></a></li>
                                                                    
                    </ul>
                    
                </div>

            </div>

        </section>
    );
}

export default Home;