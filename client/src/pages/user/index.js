import React, {useEffect} from 'react'
import Navbar from '../../components/addOns/navbar'
import Checkout from '../../components/addOns/checkout'
import { useHistory } from 'react-router-dom'
import UserLay from '../../components/userPage/userLayout'
import { useAtcContext } from '../../components/utils/atcStore'
import { useUserContext } from '../../components/utils/userStore'
import { runGlobal } from '../../components/utils/globalStore'
import API from '../../components/utils/API'

function User() {
    const history = useHistory()
    const [state, dispatch] = useAtcContext()
    const [, dispatch2] = useUserContext()

    
    useEffect(() => {
        runGlobal(dispatch)
    }, [dispatch])
     
    useEffect(() => {
        async function check() {
            await API.checklog()
         .then(res => {
            if (res.data === "no") {
                history.push('/')
            }
         })
        }
        check()
     },[])
    

    return (
        <div className="homeWrapper">
            <Navbar />
            <UserLay />
            {state.length >= 1 ? <Checkout /> : undefined} 
        </div>
    )
}

export default User