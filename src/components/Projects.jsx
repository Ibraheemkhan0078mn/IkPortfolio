import React, { useEffect, useRef } from 'react'
import Ecommerce from '../assets/shoppingCart.png'
import LMS from '../assets/LMS.png'
import chattingWebapp from '../assets/chattingWebapp.png'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'





const Projects = () => {




    let ProjectSectionHeading = useRef(null)
    let projectCard = useRef(null)



    const projectCardsArray = [
        {
            projectImg: Ecommerce,
            projectName: "Ecommerce Webapp",
            projectDescription: "Ecommerce webapp with role base access (Owner, Seller, User) and responsive design. ",
            githubUrl: "https://github.com/Ibraheemkhan0078mn/ecommerce.git",
            projectUrl: "https://e-commerce-seven-omega-71.vercel.app/"
        },
        {
            projectImg: LMS,
            projectName: "LMS Webapp",
            projectDescription: "Learning Management System webapp with role base access (Teacher, Student) and responsive design and features like courses, quiz test and certification etc",
            githubUrl: "https://github.com/Ibraheemkhan0078mn/LMSFull.git",
            projectUrl: "https://lms-full.vercel.app/"
        },
        {
            projectImg: chattingWebapp,
            projectName: "Chat Webapp",
            projectDescription: "Chat webapp with real time communication and responsive design.",
            githubUrl:"https://github.com/Ibraheemkhan0078mn/chatting_webapp.git",
            projectUrl: null
        }
    ]











    useEffect(() => {



        gsap.registerPlugin(ScrollTrigger)
        let gsapTimelineProject = gsap.timeline({
            scrollTrigger: {
                trigger: "#Projects",
                start: "top 40%",
                end: "bottom 30%",
                // markers: true,
                // scrub:true,
                toggleActions:"play reverse play reverse"
            }
        })



        gsapTimelineProject.fromTo(
            ProjectSectionHeading.current,
            {
                scale: 0,
                opacity: 0
            },
            {
                scale: 1,
                opacity: 1,
                duration: 0.2
            }
        )



        gsapTimelineProject.fromTo(
            projectCard.current,
            { scale: 0, opacity: 0 },
            { scale: 1, opacity: 1, duration: 0.4}
        )





    }, [])
















    return (
        <div
            id='Projects'
            className='min-h-[100vh] w-screen pt-16 pl-5 flex flex-col '>



            <h1
                ref={ProjectSectionHeading}
                className='h-max w-max mx-auto p-2 px-4  rounded-md text-4xl text-blue-300 font-bold mb-10 border-2 border-gray-500'>
                Projects
            </h1>





            {/* The container which contains the cards of product */}
            <div
                ref={projectCard}
                className="h-max w-full flex flex-wrap gap-5 justify-center items-center">


                {
                    projectCardsArray.map((project, index) => {
                        return (
                            <div
                                key={index}
                                className=" h-max w-max flex flex-col justify-center items-center p-2 border-2 border-zinc-700 shadow-sm shadow-gray-700 ">

                                <img
                                    className=' w-48 rounded-md shadow-lg shadow-gray-500 m-2 mb-10 p-5'
                                    src={project.projectImg} alt="" />

                                <h2
                                    className='text-lg text-blue-300  mb-4'
                                >{project.projectName}
                                </h2>

                                <p
                                    className='w-56 whitespace-normal break-words text-center text-gray-400 text-sm'
                                >
                                    {project.projectDescription}
                                </p>




                                <div className="h-max w-full flex justify-between px-5 mt-5 gap-x-3">
                                    <button
                                        onClick={() => {
                                            window.open(project.githubUrl, "_blank")
                                        }}
                                        className='h-max w-max px-3 p-2 bg-[#24292e] shadow-sm shadow-gray-400 text-zinc-300 rounded-lg text-sm flex gap-x-1 items-center justify-center'>
                                        Github
                                        <i className="ri-github-fill     h-max w-max text-zinc-300 text-sm "></i>
                                    </button>



                                    <button
                                    style={project.projectName=="Chat Webapp"?{display:"none"}:null}
                                        onClick={() => {
                                            window.open(project.projectUrl, "_blank")
                                        }}
                                        className='h-max w-max px-5 p-2 bg-blue-800 shadow-sm shadow-gray-400    text-zinc-300 text-sm rounded-lg flex gap-x-1 items-center justify-center'>
                                        Go live
                                        <i className="ri-external-link-line     h-max w-max text-zinc-300 text-sm"></i>
                                    </button>
                                </div>



                            </div>

                        )
                    }
                    )
                }



            </div>



        </div>
    )
}

export default Projects