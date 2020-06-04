import React from 'react'
import Navbar from '../components/addOns/navbar'
import HomePage from '../components/homePage/mainPage'
import HomePageCon from '../components/homePage/mainCon'
import './style.scss'

function Home() {

    return (
        <div className="homeWrapper">
            <Navbar />
            <HomePage />
              
            <HomePageCon />
        </div>
    )
}

export default Home