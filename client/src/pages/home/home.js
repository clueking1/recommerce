import React, {useEffect} from 'react'
import Navbar from '../../components/addOns/navbar'
import HomePage from '../../components/homePage/mainPage'
import HomePageCon from '../../components/homePage/mainCon'
import Checkout from '../../components/addOns/checkout'
import { useAtcContext } from '../../components/utils/atcStore'
import { runGlobal } from '../../components/utils/globalStore'
import './style.scss'

function Home() {
    const [state, dispatch] = useAtcContext()

    useEffect(() => {
        runGlobal(dispatch)
    }, [])

    

    return (
        <div className="homeWrapper">
            <Navbar />
            <HomePage />
            <HomePageCon />
           {state.length >= 1 ? <Checkout /> : undefined} 
        </div>
    )
}

export default Home