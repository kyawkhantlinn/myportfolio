import React from "react";
import AboutMeText from "./AboutMeText";
import { useInView } from "react-intersection-observer";
import vscode from "./../assets/vscode.png";

const AboutMe = ()=>{

    const { ref:ref1, inView:inView1 } = useInView({
        threshold: 0.5,
        triggerOnce: true
    });

    const { ref:ref2, inView:inView2 } = useInView({
        threshold: 0.5
    });

    return (
        <section id="aboutme" className="bg-gray-900" ref={ref1}>
            <div className="container mx-auto px-4 py-12" ref={ref2}>

                <h2 className="text-4xl text-white font-bold text-center font-serif pb-6">About Me</h2>

                <div className="flex flex-col lg:flex-row justify-center items-center text-center lg:text-left space-y-10 lg:space-y-0 lg:space-x-16 pt-6">

                    {inView1 && <AboutMeText />}

                    <div className={`w-11/12 xl:block lg:w-1/2 relative ${inView2 ? "vscode" : null}`}>
                        <img src={vscode} />
                    </div>

                </div>

            </div>
        </section>
    );
}

export default AboutMe;