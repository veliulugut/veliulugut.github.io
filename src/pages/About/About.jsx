import Footer from "../../Components/Footer/Footer.jsx";
import Navbar from "../../Components/Header/Navbar/Navbar.jsx";
import "./About.css"
import {features} from "./features.js";
import { motion } from "framer-motion"

const About = function (){

    let count = 0;
    function createCard(feature){


        count +=1;
        return (
            <motion.div key={feature.id} className="relative" initial={{ top: 300 }}
                        transition={{duration: 0.8}}
                        whileInView={{ top:0 }}
                        viewport={{ once: true }}>
                <div
                     className={`h-[310px] overflow-hidden flex ${(count%2 === 1) ? "flex-row" : "flex-row-reverse" } gap-5`}>
                    <div className="row1 flex-1">
                        <img src={feature.src} className=" rounded-xl h-full w-full" alt=""/>
                    </div>
                    <div className=" flex-1 row2 pt-5 pr-5">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-[65px]"
                             viewBox={feature.viewBox}>
                            <path
                                fill="#21cc7a"
                                d={feature.d}/>
                        </svg>
                        <h1 className="text-2xl font-bold py-3">{feature.title}</h1>
                        <p className="">{feature.text}</p>
                    </div>
                </div>

            </motion.div>

        )
    }


    return (
        <div className="">

            <div id="header " className="aboutHeader" style={{
                height: "50vh",
                backgroundImage: "url('images/16.jpg')",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
            }}>
                <Navbar></Navbar>
            </div>


            <main className="about flex flex-col items-center justify-center pt-10 pb-[100px]">
                <h2 className="text-xl font-bold text-[#21cc7a] pb-4">WHO WE ARE</h2>
                <h1 className="text-4xl font-bold pb-14">About Us</h1>
                <div
                    className="container max-w-[1200px] flex flex-col gap-y-14 w-screen items-center justify-center p-5">
                    {features.map(createCard)}
                </div>
            </main>


            <Footer></Footer>

        </div>
    )
}

export default About;