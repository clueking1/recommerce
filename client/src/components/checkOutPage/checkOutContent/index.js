import React from 'react'
import { useAtcContext } from '../../utils/atcStore'
import './style.css'

function CoContent() {
    const [state, dispatch] = useAtcContext()
    return( 
        <div className="coContent">
            {state.map(t => (
                <div className="productInfoWrapper" key={t.src}>
                    <div className="productInfo">
                        <p className="productName">{t.item}</p> 
                        <p className="productQuan">${t.value}</p>
                        <p className="productQuan">{t.quantity}</p>
                    </div>
                    <div className="productPlusSub">
                        <div className="productPlus">

                        </div>
                        <div className="productSub">
                            
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default CoContent