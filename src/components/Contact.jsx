import React, { useEffect, useRef, useState } from 'react'
import emailPhoto from '../assets/email_photo.png'
import emailjs from '@emailjs/browser'
import Loader from './Loader'
import gsap from 'gsap'
import { Form } from 'react-router-dom'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Link } from 'react-scroll'









const Contact = () => {




    let form = useRef()
    let ContactHeadingRef = useRef(null)
    let ContactImgRef = useRef(null)
    let ContactFormRef = useRef(null)

    let [githubActivate, setGithubActivate] = useState("none")
    let [whatsappActivate, setWhatsappActivate] = useState("none")
    let [emailActivate, setEmailActivate] = useState("none")

    let [textCopiedGithub, setTextCopiedGithub] = useState(false)
    let [textCopiedEmail, setTextCopiedEmail] = useState(false)
    let [textCopiedWhatsapp, setTextCopieWhatsapp] = useState(false)


    let [loaderDisply, setLoaderDisplay] = useState(null)
    let [formData, setFormData] = useState({
        userName: "",
        userEmail: "",
        message: ""
    })














    useEffect(() => {

        // neccessary when want to use the scroll trigger
        gsap.registerPlugin(ScrollTrigger)

        // we use the scroll trigger animation in timeline because we want to activate all those animation which are linked with this timeline gsap
        let gsapTimeLine = gsap.timeline(
            {
                scrollTrigger: {
                    trigger: "#Contact",
                    start: "top 90%",
                    end: "bottom 30%",
                    toggleActions: "play none none reverse   ",
                    // markers:true    
                }
            }
        );





        gsapTimeLine.fromTo(ContactHeadingRef.current,
            {
                opacity: 0, scale: 0
            },
            {
                opacity: 1, duration: 0.6, scale: 1
            }
        )




        gsapTimeLine.fromTo(form.current.children,
            {
                x: 1000
            },
            {
                x: 0, duration: 0.7, stagger: 0.1
            }
        )




        gsapTimeLine.fromTo(ContactImgRef.current,
            {
                x: -1000
            },
            {
                x: 0, duration: 0.6
            }
        )





    }, [])
















    const handleGithubBtnClick = () => {
        window.open("https://github.com/Ibraheemkhan0078mn", "_blank")

    }
































    // This is send to email on the basis of entire form and give it the form in html form
    const sendEmail = (e) => {
        e.preventDefault();

        // console.log(form.current)
        setLoaderDisplay("on")

        emailjs.sendForm(
            "service_jhkkuw6",      // service id of email.js
            "template_n1k7vbf",     // template id of email.js
            form.current,           // The data of form which are send to email. i know that it is in object form but in documentation they teach me like that and it works
            "qxOiAZ1vWw4OxH5wF"     // public id of email.js
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
























    function handleGithubCopyIconClick(e) {
        e.stopPropagation()
        navigator.clipboard.writeText("https://github.com/Ibraheemkhan0078mn")
            .then(() => {
                setTextCopiedGithub(true)
                setTimeout(() => {
                    setTextCopiedGithub(false)
                }, 2000);
            }).catch((err) => {
                console.error("The text is not copied")
            })
    }










    function handleGithubNavigateIconClick(e) {
        e.stopPropagation()
        window.open("https://github.com/Ibraheemkhan0078mn", "_blank")
    }


















    function handleEmailCopyIconClick(e) {
        e.stopPropagation()
        navigator.clipboard.writeText("ibrahim.dev901@gmail.com")
            .then(() => {
                setTextCopiedEmail(true)
                setTimeout(() => {
                    setTextCopiedEmail(false)
                }, 2000);
            }).catch((err) => {
                console.error("The text is not copied")
            })
    }








    function handleEmailMessegeIconClick(e) {
        e.stopPropagation();
        const contactSection = document.getElementById('Contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }










    function handleWhatsappCopyIconClick(e) {
        e.stopPropagation()
        // console.log("Entered in wahts")
        navigator.clipboard.writeText("+92 336 1917812")
            .then(() => {
                setTextCopieWhatsapp(true)
                setTimeout(() => {
                    setTextCopieWhatsapp(false)
                }, 2000);
            }).catch((err) => {
                console.error("The text is not copied")
            })
    }




    // function handleWhatsappMessageIconClick(e) {
    //     e.stopPropagation();
    //     console.log("Whats messege icon is clicked")
    //     window.open("https://wa.me/923361917812", "_blank");
    // }




    function handleWhatsappMessageIconClick(e) {
        e.stopPropagation();
      
        const phoneNumber = "923361917812";
        const message = "Hello Ibrahim! I'm interested in your work.";
      
        const appLink = `whatsapp://send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
        const webLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
      
        // Try opening the WhatsApp app
        window.location.href = appLink;
      
        // Fallback after 2 seconds if app isn't opened (no guarantee, just best-effort)
        setTimeout(() => {
          window.open(webLink, "_blank");
        }, 2000);
      }
      
















    return (
        <div
            id='Contact'
            className='h-max w-screen overflow-x-hidden pt-52 relative mt-24
        flex  gap-10 flex-col items-center  '>





            {/* The heading of contact section. its position is absolute */}
            <div
                ref={ContactHeadingRef}
                className="h-max w-max rounded-lg absolute left-1/2 transform -translate-x-1/2 border-2 border-gray-600 flex items-center justify-center p-3  text-blue-400
            text-xl top-16  sm:text-lg sm:top-10  lg:text-3xl  ">
                Contact me
            </div>










            {/* The container whcih contain the divs of image and form of caontact */}
            <div className="h-max w-full flex flex-col items-center sm:flex-row sm:items-start ">





                {/* left side contact photo of contact section */}
                <div
                    ref={ContactImgRef}
                    className="h-max  flex justify-center
            w-full pr-10 sm:w-1/2 sm:pr-0">
                    <img src={emailPhoto} alt="" />
                </div>








                {/* Right side contact from of contact section */}
                <div
                    id='contactForm'
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














            <div className="h-max w-full p-5 flex flex-wrap gap-3 justify-center">




                {/* For Github */}
                <div
                    onClick={() => { githubActivate == "none" ? setGithubActivate("activated") : setGithubActivate("none") }}
                    className="h-max w-max p-2 px-3 bg-[#181717] shadow-sm shadow-gray-500 rounded-lg text-zinc-300 flex items-center justify-center gap-x-2 outline-none cursor-pointer select-none">
                    Github

                    {/* Icons container */}
                    {
                        githubActivate == "activated" ?





                            // copy and navigate icons but copy is also rendered conditionaly when copy is clicked and test is copied then it is converted into completed copy icon
                            <div className=" flex gap-x-1">
                                {
                                    textCopiedGithub == true ?
                                        // complete copy icon
                                        <i className="ri-checkbox-multiple-line"></i>
                                        :
                                        // 
                                        <i
                                            onClick={handleGithubCopyIconClick}
                                            className="ri-file-copy-line">
                                        </i>
                                }



                                {/* LINK ICON    */}
                                <i
                                    onClick={handleGithubNavigateIconClick}
                                    className="ri-external-link-line"></i>


                            </div>




                            :

                            // github icon
                            <i className="ri-github-fill"></i>

                    }
                </div>






                {/* For email */}
                <div
                    onClick={() => { emailActivate == "none" ? setEmailActivate("activated") : setEmailActivate("none") }}
                    className="h-max w-max p-2 px-3 bg-[#0072C6] shadow-sm shadow-gray-500 rounded-lg text-zinc-300 flex items-center justify-center gap-x-2 outline-none cursor-pointer select-none">
                    Email
                    {
                        emailActivate == "activated" ?





                            // containing copy and messege icon
                            <div className="flex gap-x-1">

                                {
                                    textCopiedEmail == true ?
                                        <i className="ri-checkbox-multiple-line"></i>
                                        :
                                        <i
                                            onClick={handleEmailCopyIconClick}
                                            className="ri-file-copy-line">
                                        </i>
                                }

                                <i
                                    onClick={handleEmailMessegeIconClick}
                                    className="ri-message-3-fill"></i>


                            </div>







                            :

                            <i
                                onClick={handleEmailMessegeIconClick}
                                className="ri-mail-line"></i>


                    }
                </div>





                {/* For whatsapp */}
                <div
                    onClick={() => { whatsappActivate == "none" ? setWhatsappActivate("activated") : setWhatsappActivate("none") }}
                    className="h-max w-max p-2 px-3 bg-[#17c255] shadow-sm shadow-gray-500 rounded-lg text-zinc-200 flex items-center justify-center gap-x-2 outline-none cursor-pointer select-none">
                    Whatsapp
                    {
                        whatsappActivate == "activated" ?

                            <div className=" flex gap-x-1">

                                {
                                    textCopiedWhatsapp == true ?
                                        <i className="ri-checkbox-multiple-line"></i>
                                        :
                                        <i
                                            onClick={handleWhatsappCopyIconClick}
                                            className="ri-file-copy-line">
                                        </i>
                                }
                                <i
                                    onClick={handleWhatsappMessageIconClick}
                                    className="ri-message-3-fill"></i>
                            </div>

                            :

                            <i className="ri-whatsapp-line"></i>

                    }
                </div>

            </div>



        </div>
    )
}

export default Contact