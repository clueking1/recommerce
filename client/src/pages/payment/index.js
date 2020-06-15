import React, {useEffect} from 'react'
import Navbar from '../../components/addOns/navbar'
import { useAtcContext } from '../../components/utils/atcStore'
import { runGlobal } from '../../components/utils/globalStore'
import './style.css'

function PaymentPage() {
    const [state, dispatch] = useAtcContext()

    useEffect(() => {
        runGlobal(dispatch)
    }, [dispatch])

    

    return (
        <div className="paymentWrapper">
            payment page
        </div>
    )
}

export default PaymentPage