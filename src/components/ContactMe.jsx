import React from "react";
import ContactForm from "./ContactForm";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookMessenger,faTelegram,faViber } from '@fortawesome/free-brands-svg-icons';

const ContactMe = ()=>{
    return (
        <section id="contactme" className="bg-gray-300">
            <div className="container mx-auto p-8 py-28">

                <div className="text-gray-800 text-center">
                    <h3 className="text-4xl font-bold py-4 font-serif">Let's connect!</h3>
                    <p>Have an idea, opportunity, or feedback? I'd love to hear from you!</p>
                </div>

                <div className="flex justify-center items-center pt-8">
                    <div className="w-full lg:w-1/2 bg-gray-200 shadow-lg rounded-lg">
                        <h3 className="text-3xl text-center text-white font-semibold bg-purple-700 py-4 mb-4">Contact Me</h3>
                        <ContactForm />
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

                    <div className="hidden lg:flex w-1/2 justify-center items-center">
                        <img src="./public/gifs/contactme2.gif" width="600" />
                    </div>
                </div>

            </div>
        </section>
    );
}

export default ContactMe;