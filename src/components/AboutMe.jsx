import React from "react";
import AboutMeText from "./AboutMeText";
import { useInView } from "react-intersection-observer";

const AboutMe = ()=>{

    const { ref:ref1, inView:inView1 } = useInView({
        threshold: 0.3,
        triggerOnce: true
    });

    const { ref:ref2, inView:inView2 } = useInView({
        threshold: 0.3
    });

    return (
        <section id="aboutme" className="bg-gray-900" ref={ref1}>
            <div className="container mx-auto px-4 py-20" ref={ref2}>

                <h2 className="text-4xl text-white font-bold text-center font-serif pb-6">About Me</h2>

                <div className="flex flex-col lg:flex-row justify-center items-center text-center lg:text-left space-y-10 lg:space-y-0 lg:space-x-16 mt-12">

                    {inView1 && <AboutMeText />}

                    <div className={`w-11/12 xl:block lg:w-1/2 relative ${inView2 ? "vscode" : null}`}>
                        <img src="./images/code.webp" alt="code" />
                    </div>

                </div>

            </div>
        </section>
    );
}

export default AboutMe;