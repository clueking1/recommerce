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
            <div className="revOrder">
                <h2>Review Your Order</h2>
            </div>
            {state.map(t => (
                <div className="productInfoWrapper" key={t.src}>
                    <img className="coImg" src={image(t.src)} />
                    <div className="productInfo">
                    
                        <div className="prodNameDiv">
                            <div className="z">
                                <p className="productNameTit">Item</p> 
                                <p className="productName">{t.item}</p> 
                            </div>
                        </div>
                        <div className="prodValDiv">
                            <div className="z">
                                <p className="productValueTit">Price</p> 
                                <p className="productValue">${t.value}</p> 
                            </div>
                        </div>
                        <div className="prodPlusSub">
                            <div className="z">
                                <p className="productQuan">{t.quantity}</p>
                                <div className="productPlus">
                                    <button className="plusBut">+</button>
                                </div>
                                <div className="productSub">
                                <button className="plusBut">-</button>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            ))}
            <div className="totalOrder">
                <p className="total">Total:<span className="totalNum">$150</span></p>
                <div className="proceedBut">
                <a className="proceed proceedBut" href="/">Proceed To Payment</a>
                </div>
              
            </div>
        </div>
    )
}

export default CoContent