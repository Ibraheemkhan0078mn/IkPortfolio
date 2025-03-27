import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import './LoaderAnim.css'

const Loader = ({hw,bw}) => {


    let loaderDiv= useRef()

    // useEffect(()=>{
    //     console.log("useeffect")
    //    const GsapContext= gsap.context(()=>{
    //         gsap.to(loaderDiv.current,{
    //             rotation:360,
    //             repeat:-1,
    //             duration:1,
    //             ease:'none',
    //             paused:false
    //         })
    //     })


    //     return ()=>{
    //         GsapContext.kill()
    //     }
       
    // },[loaderDiv.current])




  return (
    <div
    className="bg-transparent   border-t-gray-900 rounded-full "
    id='loader'
    style={{height:`${hw}px`, width:`${hw}px`, borderTopWidth:`${bw}px`}}>
        
    </div>
  )
}

export default Loader