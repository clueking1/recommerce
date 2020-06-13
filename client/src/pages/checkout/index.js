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
    }, [dispatch])

    console.log(state)

    return (
        <div className="coWrapperPage">
            <Navbar />
            <CheckOutLayout />
            
            {setTimeout(function(){
               return <CoContent data={data} />
            }, 100)}
        </div>
    )
}

export default CheckOutPage