import React from 'react';
import { useForm } from '@formspree/react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

function ContactForm() {

    const [state, handleSubmit, reset] = useForm("xrbqjejl");

    if (state.succeeded) {
        return (
            <div className="mb-4">
                <DotLottieReact src="https://lottie.host/09f52617-ae23-4366-9639-8d8493da45de/tJsQwniWR7.lottie" autoplay />
                <div className='flex justify-center items-center'>
                    <button className="text-white font-semibold bg-purple-600 hover:bg-purple-700 rounded-xl cursor-pointer px-6 py-3" onClick={reset}>Send another one</button>
                </div>
            </div>
        );
    }

    return (

        <form onSubmit={handleSubmit}>
            
            <input type="text" name="name" id="name" className="w-full text-lg text-white rounded-full border-2 border-gray-400 hover:border-indigo-700 focus:border-purple-700 transition duration-300 outline-none px-7 py-4 mb-8" placeholder="Name" required />

            <input type="email" name="email" id="email" className="w-full text-lg text-white rounded-full border-2 border-gray-400 hover:border-indigo-700 focus:border-purple-700 transition duration-300 outline-none px-7 py-4 mb-8" placeholder="Email" required />

            <textarea name="message" id="message" className="w-full text-lg text-white rounded-xl border-2 border-gray-400 hover:border-indigo-700 focus:border-purple-700 transition duration-300 outline-none px-7 py-4 mb-8" placeholder="Your Message..." rows="6" required />
            
            <div className="px-8 flex justify-center items-center">
                <button type="submit" className="text-lg text-white bg-purple-600 hover:bg-purple-700 rounded-xl cursor-pointer px-6 py-3" disabled={state.submitting}>Send Email</button>
            </div>

        </form>
    );
}

export default ContactForm;