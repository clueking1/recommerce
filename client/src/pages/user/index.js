import React, {useEffect} from 'react'
import Navbar from '../../components/addOns/navbar'
import Checkout from '../../components/addOns/checkout'
import UserLay from '../../components/userPage/userLayout'
import { useAtcContext } from '../../components/utils/atcStore'
import { runGlobal } from '../../components/utils/globalStore'
import UserLayout from '../../components/userPage/userLayout'


function User() {
    const [state, dispatch] = useAtcContext()

    useEffect(() => {
        runGlobal(dispatch)
    }, [dispatch])

    

    return (
        <div className="homeWrapper">
            <Navbar />
            <UserLay />
            {state.length >= 1 ? <Checkout /> : undefined} 
        </div>
    )
}

export default User