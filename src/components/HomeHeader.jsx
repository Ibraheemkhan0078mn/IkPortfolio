import React, { useContext, useEffect, useRef, useState } from 'react'
import { Link } from 'react-scroll'
import MyContext from '../context api/MyContext'
import gsap from 'gsap'











const HomeHeader = () => {


    let ListArray = ["Home", "About", "Projects", "Contact"]
    let [mode, setMode] = useState("Home")
    let logoRef = useRef(null)
    let listDivRef = useRef(null)
    let { gsapTimeLineRef } = useContext(MyContext)



    // useEffect(() => {
    //     if(logoRef.current){
    //         const anim = gsap.from(logoRef.current, {
    //             marginLeft:100,  
    //             duration: 0.4,
    //         })



    //     }
    // }, [])


    useEffect(() => {
        if (logoRef.current) {



            let gsapTimeLine = gsap.timeline()
            gsapTimeLineRef.current = gsapTimeLine;

            gsapTimeLine.fromTo(listDivRef.current.children,
                { y: 20, opacity: 0 },
                { y: 0, opacity: 1, stagger: { amount: 0.6, from: 'start' }, ease: "power3.out" },
            )
                .fromTo(
                    logoRef.current,
                    { marginLeft: "100px", opacity: 0 },
                    { marginLeft: "40px", opacity: 1, duration: 0.6, ease: "power3.out" }
                )
                





        }
    }, []);






    return (
        <div className='h-24 w-full   text-white fixed z-[999] -translate-x-0 '>


            {/* Logo of Home page */}
            <div
                ref={logoRef}
                id='logo'
                className="h-full w-max font-bold flex items-center ml-10 absolute 
            text-xl -left-3  sm:left-0 md:text-2xl xl:text-3xl">
                Portfolio
            </div>




            {/* The list of navbar (home, about, project, contact) */}
            <div
                ref={listDivRef}
                className="h-full w-max flex items-center  text-xl font-semibold absolute right-0
            mr-4 md:mr-10 xl:mr-24">

                {ListArray.map((eachList, index) => {
                    return (
                        <Link
                            to={eachList}
                            smooth={true}
                            duration={500}
                            className="select-none cursor-pointer 
                            ml-4 sm:ml-8 md:ml-12 lg:ml-14 xl:ml-18    
                            text-[12px] sm:text-lg md:text-xl "
                            style={mode == eachList ? { borderBottom: "2px solid #7e9eed", paddingBottom: "5px", transition: "0.8s" } : null}
                            onClick={() => { setMode(eachList) }}
                            key={index}>


                            {eachList}


                        </Link>
                    )
                })}

            </div>




        </div>
    )
}

export default HomeHeader