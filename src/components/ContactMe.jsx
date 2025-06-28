import React from "react";
import ContactForm from "./ContactForm";
import contactme from "./../assets/contactme.svg";
import bg from "./../assets/bgs/bg3.jpg";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookMessenger,faTelegram,faViber } from '@fortawesome/free-brands-svg-icons';

import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const ContactMe = ()=>{
    return (
        <section id="contactme" style={{backgroundImage:`url(${bg})`,backgroundSize:"cover",backgroundPosition:"center",backgroundAttachment:"fixed"}}>
            <div className="p-8 pt-28" style={{backgroundColor:"rgba(0,0,0,0.4)"}}>

                <div className="container mx-auto">
                    <div className="text-center mb-16">
                        <h3 className="text-4xl text-white font-bold py-4 font-serif">Let's connect!</h3>
                        <p className="text-gray-300">Have an idea, opportunity, or feedback? I'd love to hear from you!</p>
                    </div>

                    <div className="flex justify-evenly items-start pt-8">
                        <div className="w-11/12 md:w-2/3 lg:w-1/3">
                            <ContactForm />
                            <p className="text-center text-sm text-gray-400 py-6">or contact me via</p>
                            <div className="flex justify-center items-center py-4 pb-10">
                                <ul className="w-4/5 md:w-1/2 flex justify-around items-center">
                                    <li>
                                        <a href="https://m.me/austin.garrix.2025" target="_blank" className="text-2xl text-white bg-sky-500 rounded-full hover:bg-sky-600 px-3 py-2"><FontAwesomeIcon icon={faFacebookMessenger} /></a>
                                    </li>
                                    <li>
                                        <a href="https://t.me/AustinTheGoatxD" target="_blank" className="text-2xl text-white bg-teal-500 rounded-full hover:bg-teal-600 px-3 py-2"><FontAwesomeIcon icon={faTelegram} /></a>
                                    </li>
                                    <li>
                                        <a href="viber://chat?number=%2B959780319178" target="_blank" className="text-2xl text-white bg-purple-500 rounded-full hover:bg-purple-600 px-3 py-2"><FontAwesomeIcon icon={faViber} /></a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="hidden lg:flex w-3/10">
                            <img src={contactme} />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default ContactMe;