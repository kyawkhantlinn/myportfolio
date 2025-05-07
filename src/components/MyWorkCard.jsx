import React from "react";

import tailwind from "./../assets/tailwind.png";
import firebase from "./../assets/firebase.png";
import vite from "./../assets/vite.png";

const MyWordCard = ()=>{
    return (
        <div className="w-2/5 bg-violet-900 text-white rounded-xl cursor-pointer hover:scale-105 hover:shadow-2xl hover:shadow-violet-900 transition duration-200 p-8">
                                    <h3 className="text-2xl text-center font-semibold mb-6">Blue Crescent Chatroom</h3>
                                    <div className="text-lg flex justify-center items-center space-x-2 space-y-2">
                                        <p className="text-gray-300">Tech Stack : </p>
                                        <img src={tailwind} width="50" alt="tailwind" />
                                        <img src={firebase} width="50" alt="firebase" />
                                        <img src={vite} width="50" alt="vite" />
                                    </div>
                                </div>
    )
}

export default MyWordCard;