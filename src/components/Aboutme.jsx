import React, { useEffect, useRef } from 'react'
import aboutPng from '../assets/aboutpng.png'
import mernPng from '../assets/mernPng.png'
import gsap from "gsap"
import { ScrollTrigger } from 'gsap/ScrollTrigger'





const Aboutme = () => {


    let AboutMeParagraph = `Hi, my name is M.Ibraheem and I am a self-taught MERN Stack Developer. I started my learning journey by learning HTML, CSS, JavaScript and then React, Gsap for some animations, Chart.js for visual representation of some data and dive in backend development with Node.js and learn RESTful API's, Mongodb database and realtime communications. I’ve built projects such as chat webapp, an e-commerce platform with role-based access (Admin, Seller, User), and a learning management system with role base access (Teacher, Student) in MERN stack to get experience in making Real world Wepapps.
I use the following technologies to make these awesome webapps`

    let techArray = ["HTML", "Inline & External file CSS", "Tailwind CSS", "Responsive CSS", "JavaScript", "React", "Gsap", "Chart.js", "Node.js", "Express.js", "Mongodb", "Mongoose", "cloudinary", "Git", "Github", "Thunder Client", "jwt", "bcrypt", "cors", "Netlify", "Vercel"]




    let AboutImgRef = useRef(null)
    let AboutTxtRef = useRef(null)




    useEffect(() => {

        gsap.registerPlugin(ScrollTrigger)
        let gsapTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: "#About",
                start: "top 40%",
                end: "bottom 30%",
                // markers: true,
                // scrub:true,
                toggleActions:"play reverse play reverse"
            }
        })



        gsapTimeline.fromTo(
            AboutImgRef.current,
            {
                x: 500, opacity: 0
            },
            {
                x: 0,
                opacity: 1,
                duration: 0.4,
            }
        )



        gsapTimeline.fromTo(
            AboutTxtRef.current,
            { x: -500, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.4 }
        )

    }, [])








    return (
        // main div of the about section
        <div
            id='About'
            className='min-h-[100vh] w-screen pt-16 pl-5
        flex flex-col-reverse   sm:flex-row '>



            {/* This is the paragraph and tech skills of right side of about section */}
            <div
                ref={AboutTxtRef}
                className="h-full  text-zinc-300 p-10
            w-full flex flex-col items-center  sm:w-1/2 sm:block">

                {/* heading  */}
                <h1 className='h-max w-max p-2 rounded-md text-4xl text-blue-300 font-bold mb-10 border-2 border-gray-500'>About me</h1>


                {/* paragraph */}
                <p className=' text-center  sm:text-start'>{AboutMeParagraph}</p>


                {/* tech mentions */}
                <div className="h-max w-full flex flex-wrap gap-x-3 gap-y-3 mt-10">
                    {techArray.map((eachTech, index) => {
                        return (
                            <div className="h-max w-max p-1 px-3 rounded-full border border-zinc-700 text-sm" key={index}>
                                #{eachTech}
                            </div>
                        )
                    })}
                </div>




                {/* mern stack png image mention */}
                {/* <img 
                    className='w-96 -translate-y-16'
                    src={mernPng} alt="" /> */}






            </div>










            {/* This is the image of right side of about section */}
            <div
                ref={AboutImgRef}
                className="h-max flex r justify-center p-10
            w-full sm:w-1/2 ">
                <img
                    className=' mt-16
                    w-64 sm:w-96'
                    src={aboutPng} alt="" />
            </div>







        </div>



    )
}

export default Aboutme