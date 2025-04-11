import React from 'react'
import HomeHeader from '../components/HomeHeader'
import HomeHeroCard from '../components/HomeHeroCard'
import Aboutme from '../components/Aboutme'
import Contact from '../components/Contact'
import Loader from '../components/Loader'
import Projects from '../components/Projects'

const Home = () => {
    return (
        <div className='min-h-screen w-screen bg-zinc-800 overflow-x-hidden pb-32'>


            {/* It contain the Header or navbar  of Home page */}
            <HomeHeader />


            {/* It contain the Hero card of Home page */}
            <HomeHeroCard />





            {/* About section of my portfolio */}
            <Aboutme />



            {/* Contain the project */}
            <Projects/>







            {/* Contact with the developer */}
            <Contact />





            {/* <Loader   hw={100}  /> */}



        </div>
    )
}

export default Home