import React from 'react'
import Navbar from '../components/addOns/navbar'
import HomePage from '../components/homePage/mainPage'
import './style.scss'

function Home() {

    return (
        <div className="homeWrapper">
            <Navbar />
            <HomePage />
        </div>
    )
}

export default Home