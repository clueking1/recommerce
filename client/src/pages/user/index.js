import React, {useEffect} from 'react'
import Navbar from '../../components/addOns/navbar'
import Checkout from '../../components/addOns/checkout'
import { useHistory } from 'react-router-dom'
import UserLay from '../../components/userPage/userLayout'
import { useAtcContext } from '../../components/utils/atcStore'
import { useUserContext } from '../../components/utils/userStore'
import { runGlobal, updateUser, updateGlobal } from '../../components/utils/globalStore'
import UserLayout from '../../components/userPage/userLayout'


function User() {
    const history = useHistory()
    const [state, dispatch] = useAtcContext()
    const [stateUser] = useUserContext()

    useEffect(() => {
        runGlobal(dispatch)
    }, [dispatch])
    useEffect(() => {
       const hey = updateUser(dispatch)
        console.log(hey)
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