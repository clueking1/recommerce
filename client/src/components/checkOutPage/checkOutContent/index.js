import React from 'react'
import { useAtcContext } from '../../utils/atcStore'
import './style.css'
import iphoneWhite from '../../productPage/products/assets/imageIphoneX.jpeg'
import iphoneBlack from '../../productPage/products/assets/iphoneBlack.jpeg'
import iphone11 from '../../productPage/products/assets/iphone11.jpg'

function CoContent() {
    const [state] = useAtcContext()

    function image(img) {
        if (img === "IphoneWhite") {
            return iphoneWhite
        } else if (img === "IphoneBlack") {
            return iphoneBlack
        } else {
            return iphone11
        }
    }

    return( 
        <div className="coContent">
            {state.map(t => (
                <div className="productInfoWrapper" key={t.src}>
                    <img className="coImg" src={image(t.src)} />
                    <div className="productInfo">
                    
                        <div className="prodNameDiv">
                            <p className="productNameTit">Item</p> 
                            <p className="productName">{t.item}</p> 
                        </div>
                        <div className="prodValDiv">
                            <p className="productValueTit">Price</p> 
                            <p className="productValue">${t.value}</p> 
                        </div>
                        <div className="prodPlusSub">
                            <p className="productQuan">{t.quantity}</p>
                            <div className="productPlus">

                            </div>
                            <div className="productSub">
                                
                            </div>
                        </div>
                        
                    </div>
                </div>
            ))}
        </div>
    )
}

export default CoContent