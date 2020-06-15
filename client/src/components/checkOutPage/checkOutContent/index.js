import React, { useState,useEffect } from 'react'
import { useAtcContext } from '../../utils/atcStore'
import { updateGlobal} from '../../utils/globalStore'
import './style.css'
import iphoneWhite from '../../productPage/products/assets/imageIphoneX.jpeg'
import iphoneBlack from '../../productPage/products/assets/iphoneBlack.jpeg'
import iphone11 from '../../productPage/products/assets/iphone11.jpg'

function CoContent() {
    const [state, dispatch] = useAtcContext()
    let [tot, setTot] = useState(0)
    const [setStyle, setSetStyle] = useState()

    function image(img) {
        if (img === "IphoneWhite") {
            return iphoneWhite
        } else if (img === "IphoneBlack") {
            return iphoneBlack
        } else {
            return iphone11
        }
    }

    useEffect(() => {
        updateGlobal(state)
    }, [state])

    useEffect(() => {
        let first = 0
        state.map(t => {
            let total = t.value * t.quantity
            first += total
        })
        setTot(first)
    }, [state])

    function plusSub(it) {
        if (it.quantity - 1 < 0) {
            return
        }
        let index = state.map(e =>  e.src).indexOf(it.src)
        
        if (it.type === "plus") {
            dispatch({type: "plus", src: it.src, oSrc: index})
        } else {
            dispatch({type: "sub", src: it.src, oSrc: index})
        }
        
      }

    function subBut(quan) {
        if (quan === 0) {
            return {cursor: "cursor", visibility: "hidden"}
        } else {
            return {cursor: "pointer"}
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
                                    <button 
                                        style={subBut(t.quantity)}
                                        className="plusBut"
                                        onClick={() => plusSub({type: "sub", src: t.src, quantity: t.quantity})}
                                    >-</button>
                                </div>
                                <div className="productSub">
                                <button 
                                    className="plusBut"
                                    onClick={() => plusSub({type: "plus", src: t.src})}
                                >+</button>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            ))}
            <div className="totalOrder">
                <p className="total">Total:<span className="totalNum">${tot}</span></p>
                <div className="proceedBut">
                <a className="proceed proceedBut" href="/">Proceed To Payment</a>
                </div>
              
            </div>
        </div>
    )
}

export default CoContent