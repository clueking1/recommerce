import React, { useEffect, useState } from 'react'
import Navbar from '../../components/addOns/navbar'
import CheckOutLayout from '../../components/checkOutPage/checkOutLayout'
import { useAtcContext } from '../../components/utils/atcStore'
import CoContent from '../../components/checkOutPage/checkOutContent'
import { runGlobal } from '../../components/utils/globalStore'
import './style.css'

function CheckOutPage() {
    const [state, dispatch] = useAtcContext()
    const [data, setData] = useState([]) 

    useEffect(() => {
        runGlobal(dispatch)
    }, [])

    return (
        <div className="coWrapperPage">
            <Navbar />
            <CheckOutLayout />
            <CoContent data={data} />

        </div>
    )
}

export default CheckOutPage