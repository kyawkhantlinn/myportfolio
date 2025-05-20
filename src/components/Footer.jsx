import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub,faFacebook,faTelegram,faViber } from '@fortawesome/free-brands-svg-icons';

const Footer = ()=>{

    let date = new Date().getUTCFullYear();
    // console.log(date);

    return (
        <section className="bg-stone-900">
            <div className="container mx-auto py-10">

                <div className="w-full flex flex-col md:flex-row justify-between items-center">

                    <ul className="w-full md:w-1/2 lg:w-2/3 flex flex-col lg:flex-row justify-around items-center space-y-4 lg:space-y-0 pb-6 lg:pb-0">

                        <li><a href="#home" className="text-gray-300 hover:text-green-500 transition duration-200 px-4 py-2">Home</a></li>

                        <li><a href="#aboutme" className="text-gray-300 hover:text-green-500 transition duration-200 px-4 py-2">About Me</a></li>

                        <li><a href="#toolkit" className="text-gray-300 hover:text-green-500 transition duration-200 px-4 py-2">My Toolkit</a></li>

                        <li><a href="#mywork" className="text-gray-300 hover:text-green-500 transition duration-200 px-4 py-2">My Work</a></li>

                        <li><a href="#contactme" className="text-gray-300 hover:text-green-500 transition duration-200 px-4 py-2">Contact Me</a></li>

                    </ul>

                    <ul className="w-1/2 lg:w-1/6 flex justify-around items-center">

                        <li><a href="https://github.com/kyawkhantlinn" className="text-2xl text-gray-300 hover:text-blue-500 transition duration-200 px-4 py-2"><FontAwesomeIcon icon={faGithub} /></a></li>

                        <li><a href="https://www.facebook.com/profile.php?id=100051607762245&mibextid=ZbWKwL" className="text-2xl text-gray-300 hover:text-blue-500 transition duration-200 px-4 py-2"><FontAwesomeIcon icon={faFacebook} /></a></li>

                        <li><a href="https://t.me/AustinTheGoatxD" className="text-2xl text-gray-300 hover:text-blue-500 transition duration-200 px-4 py-2"><FontAwesomeIcon icon={faTelegram} /></a></li>

                        <li><a href="viber://chat?number=%2B959780319178" className="text-2xl text-gray-300 hover:text-blue-500 transition duration-200 px-4 py-2"><FontAwesomeIcon icon={faViber} /></a></li>
                                                
                    </ul>

                </div>

                <p className="text-lg text-gray-300 text-center pt-12">&copy; {date} Austin — Built with React & Tailwind</p>

            </div>
        </section>
    );
}

export default Footer;