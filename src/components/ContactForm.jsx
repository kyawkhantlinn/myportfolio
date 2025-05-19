import React from 'react';
import { useForm } from '@formspree/react';

function ContactForm() {

    const [state, handleSubmit, reset] = useForm("xrbqjejl");

    if (state.succeeded) {
        return (
            <div className="py-6 pb-12 space-y-4">
                <p className='text-xl text-center text-gray-800'>Email sent successfully!</p>
                <div className='flex justify-center items-center'>
                    <button className="text-white font-semibold bg-purple-600 hover:bg-purple-700 rounded-xl cursor-pointer px-6 py-3" onClick={reset}>Send another one</button>
                </div>
            </div>
        );
    }

    return (

        <form onSubmit={handleSubmit}>
            
            <div className="px-8 py-5">
                <input type="text" name="name" id="name" className="w-full text-lg rounded-xl border-2 border-gray-400 focus:border-purple-700 focus:shadow-xl transition duration-300 outline-none px-6 py-3" placeholder="Name" required />
            </div>

            <div className="px-8 py-5">
                <input type="email" name="email" id="email" className="w-full text-lg rounded-xl border-2 border-gray-400 focus:border-purple-700 focus:shadow-xl transition duration-300 outline-none px-6 py-3" placeholder="Email" required />
            </div>

            <div className="px-8 py-5">
                <textarea name="message" id="message" className="w-full text-lg rounded-xl border-2 border-gray-400 focus:border-purple-700 focus:shadow-xl transition duration-300 outline-none px-6 py-3" placeholder="Your Message..." required />
            </div>
            
            <div className="px-8 pb-5 flex justify-center items-center">
                <button type="submit" className="text-lg text-white bg-purple-600 hover:bg-purple-700 rounded-xl cursor-pointer px-6 py-3" disabled={state.submitting}>Send Email</button>
            </div>

        </form>
    );
}

export default ContactForm;