import React, { useEffect } from 'react'
import Navbar from '../../components/addOns/navbar'
import CheckOutLayout from '../../components/checkOutPage/checkOutLayout'
import { useAtcContext } from '../../components/utils/atcStore'
import { runGlobal } from '../../components/utils/globalStore'
import './style.css'

function CheckOutPage() {
    const [, dispatch] = useAtcContext()

    useEffect(() => {
        runGlobal(dispatch)
    }, [dispatch])

    return (
        <div className="coWrapperPage">
            <Navbar />
            <CheckOutLayout/>
        </div>
    )
}

export default CheckOutPage