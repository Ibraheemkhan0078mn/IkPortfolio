import React, { useEffect, useRef, useState } from 'react'
import emailPhoto from '../assets/email_photo.png'
import emailjs from '@emailjs/browser'
import Loader from './Loader'
import gsap from 'gsap'
import { Form } from 'react-router-dom'
import { ScrollTrigger } from 'gsap/ScrollTrigger'









const Contact = () => {




    let form = useRef()
    let ContactHeadingRef= useRef(null)
    let ContactImgRef= useRef(null)
    let ContactFormRef= useRef(null)

    let [loaderDisply, setLoaderDisplay] = useState(null)
    let [formData, setFormData] = useState({
        userName: "",
        userEmail: "",
        message: ""
    })











    useEffect(()=>{

        // neccessary when want to use the scroll trigger
        gsap.registerPlugin(ScrollTrigger)

        // we use the scroll trigger animation in timeline because we want to activate all those animation which are linked with this timeline gsap
        let gsapTimeLine= gsap.timeline(
            {
                scrollTrigger:{
                    trigger:"#Contact",
                    start:"top 90%",
                    end:"bottom 30%",
                    toggleActions:"play none none reverse   ",
                    // markers:true    
                }
            }
        );





        gsapTimeLine.fromTo(ContactHeadingRef.current,
            {
                opacity:0,scale:0
            },
            {
                opacity:1,duration:0.6,scale:1
            }
        )
        

        

        gsapTimeLine.fromTo(form.current.children,
            {
                x:1000
            },
            {
                x:0,duration:0.7, stagger:0.1
            }
        )




        gsapTimeLine.fromTo(ContactImgRef.current,
            {
                x:-1000
            },
            {
                x:0, duration:0.6
            }
        )





    },[])

















    // This is send to email on the basis of entire form and give it the form in html form
    const sendEmail = (e) => {
        e.preventDefault();

        // console.log(form.current)
        setLoaderDisplay("on")

        emailjs.sendForm(
            "service_n1kzpzn",      // service id of email.js
            "template_m1269gf",     // template id of email.js
            form.current,           // The data of form which are send to email. i know that it is in html form but in documentation they teach me like that and it works
            "g37AKSNdA3Gf9XH1y"     // public id of email.js
        )
            .then((result) => {
                setLoaderDisplay(null)
                setFormData({ userName: "", userEmail: "", message: "" })
                console.log("Success:", result.text);
                alert("Email sent successfully!");
            },
                (error) => {
                    setLoaderDisplay(null)
                    console.log("Error:", error.text);
                    alert("Failed to send email.");
                }
            );
    };


























    // to change the value of formdata properties when new word is typed
    function handleChange(e) {
        let { value, name } = e.target;
        setFormData({ ...formData, [name]: value })
    }







                                                         







    return (
        <div 
        id='Contact'
        className='h-max w-screen overflow-x-hidden pt-52 relative mt-24
        flex  gap-10 flex-col items-center sm:flex-row sm:items-start  '>





{/* The heading of contact section. its position is absolute */}
            <div 
            ref={ContactHeadingRef}
            className="h-max w-max rounded-lg absolute left-1/2 transform -translate-x-1/2 border-2 border-gray-600 flex items-center justify-center p-3  text-blue-400
            text-xl top-16  sm:text-lg sm:top-10  lg:text-3xl  ">
                Contact me
            </div>









            {/* left side contact photo of contact section */}
            <div 
            ref={ContactImgRef}
            className="h-max  flex justify-center
            w-full pr-10 sm:w-1/2 sm:pr-0">
                <img src={emailPhoto} alt="" />
            </div>







            {/* Right side contact from of contact section */}
            <div
            // ref={ContactFormRef}
            className="h-max 
            w-full sm:w-1/2  ">

                <form
                    ref={form}
                    onSubmit={sendEmail}
                    action=""
                    className='h-max w-full flex flex-col px-5 pb-16 gap-10 text-zinc-300 
                    sm:pr-10'>


                    <div>
                        Your Name
                        <input
                            className='h-12 w-full border-3 border-zinc-600 text-zinc-300 rounded-lg px-2 flex items-center font-semibold text-lg outline-none'
                            type="text"
                            name='userName'
                            onChange={handleChange}
                            value={formData.userName}
                            placeholder='Enter your name...' />
                    </div>

                    <div>
                        Your Email
                        <input
                            className='h-12 w-full border-3 border-zinc-600 text-zinc-300 rounded-lg px-2 flex items-center font-semibold text-lg outline-none'
                            type="text"
                            name='userEmail'
                            onChange={handleChange}
                            value={formData.userEmail}
                            placeholder='Enter your Email Address...'
                        />
                    </div>

                    <div>
                        Message
                        <textarea
                            className='h-32 w-full border-3 border-zinc-600 text-zinc-300 rounded-lg p-2 flex items-center font-semibold text-lg outline-none'
                            onChange={handleChange}
                            value={formData.message}
                            name='message'
                            placeholder='Type the message for developer...'
                        ></textarea>
                    </div>

                    <button
                        type='submit'
                        className='h-10 w-full relative  bg-blue-400 rounded-lg text-black font-semibold'
                    >
                        Submit
                        {
                            loaderDisply == "on" ?
                                <div className="absolute right-[30%] top-[22%]"><Loader hw={20} bw={4} /></div>
                                :
                                null
                        }
                    </button>


                </form>
            </div>




        </div>
    )
}

export default Contact