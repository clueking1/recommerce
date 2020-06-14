import React, { useEffect } from 'react'
import { useAtcContext } from '../../utils/atcStore'
import './style.css'

function Checkout() {

    return (
        <a className="coWrapper" href="/checkout">
            <div>
                <h2>Checkout!</h2>
            </div>
        </a>
    )
}

export default Checkout