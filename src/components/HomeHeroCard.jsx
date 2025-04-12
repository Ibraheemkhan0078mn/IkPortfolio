import React, { useContext, useEffect, useRef } from 'react'
import { Link } from 'react-scroll'
import 'remixicon/fonts/remixicon.css'
import MyContext from '../context api/MyContext'

const HomeHeroCard = () => {



    let helloCardDivRef= useRef(null)
    let {gsapTimeLineRef}= useContext(MyContext)




    useEffect(()=>{
        // console.log("entered in gsaptimeline useeffect")

        if(gsapTimeLineRef.current){
            // console.log("entered in gsaptimeline")
            gsapTimeLineRef.current.fromTo(helloCardDivRef.current,
                {y:"18rem",opacity:0},
                {y:"16rem",opacity:1,stagger:{ammount:0.6,from:"start"}}
            )
        }

    },[gsapTimeLineRef.current])





    return (

        // main first div of the home page
        <div className=" w-screen relative
        h-[80vh] sm:h-[110vh]
        flex justify-center sm:block" id='Home'>



            {/* Hello card of Home section */}
            <div 
            ref={helloCardDivRef}
            className='min-h-1/3 min-w-1/3 absolute translate-y-64 text-white  
            ml-3 sm:ml-5 md:ml-10 lg:ml-18
            flex flex-col justify-center items-center sm:block  '>


                <h2 className='text-2xl font-semibold ml-1'>Hi, I'm</h2>
                <h1 className='text-6xl font-bold bg-gradient-to-r from-blue-600 to-pink-400 bg-clip-text text-transparent     '>M.Ibraheem</h1>
                <h2 className='text-2xl font-semibold mt-2   ml-1'>And I'm a
                    <span className='h-max w-max text-2xl font-bold ml-2  bg-gradient-to-r from-blue-500 to-blue-400 bg-clip-text text-transparent'>Web Developer</span>
                </h2>





                {/* The About me button but from previous experience i cant able to change some css of button with button attribute therefore i make it div and then apply onclick on it */}
                <Link to='About' smooth={true} duration={500}>
                    <div className="h-8 w-max px-3 select-none cursor-pointer flex items-center justify-center rounded-sm mt-10 bg-gradient-to-r from-blue-600 to-blue-400 ">
                        About me
                        <i className="ri-arrow-right-long-line   ml-2 mt-1"></i>
                    </div>
                </Link>

            </div>




        </div>
    )
}

export default HomeHeroCard