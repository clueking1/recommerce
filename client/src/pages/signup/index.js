import React, {useEffect} from 'react'
import Navbar from '../../components/addOns/navbar'
import Checkout from '../../components/addOns/checkout'
//import LoginLayout from '../../components/loginPage/loginLayout'
import { useAtcContext } from '../../components/utils/atcStore'
import { runGlobal } from '../../components/utils/globalStore'
import './style.css'

function SignUp() {
    const [state, dispatch] = useAtcContext()

    useEffect(() => {
        runGlobal(dispatch)
    }, [dispatch])

    

    return (
        <div className="homeWrapper">
            <Navbar />
            {/* <LoginLayout/> */}
            {state.length >= 1 ? <Checkout /> : undefined} 
        </div>
    )
}

export default SignUp