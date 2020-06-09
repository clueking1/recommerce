import React, {useEffect} from 'react'
import { useAtcContext, AtcStore } from '../../utils/atcStore'
import './style.css'


function ViewProducts() {

    
        console.log(AtcStore._currentValue.item)
        console.log(AtcStore)
    const [state, dispatch] = useAtcContext()
        console.log(state)
    let value = 0
    return (
        <div className="productsWrapper">
            <div className="productOne" >
                <img className="productImg" alt="iphoneX" src={require('./assets/imageIphoneX.jpeg')} />
                <img className="productBackImg" alt="backgif" src={require('./assets/gif2.gif')} />
                <div className="productTitle" >
                    <h3>Iphone X</h3>
                </div>
                <div className="addToCart">
                    <button 
                    value="150" 
                    className="addToCartBut"
                    onClick={() => dispatch(
                        { type: "add", value: 150, item: "Iphone X", src: "IphoneWhite"}
                    )}
                    >Add To Cart $150</button>
                </div>
            </div>
            <div className="productTwo">
                <img className="productImg" alt="iphoneX" src={require('./assets/iphone11.jpg')} />
                <img className="productBackImg" alt="backgif" src={require('./assets/gif2.gif')} />
                <div className="productTitle" >
                    <h3>Iphone 11</h3>
                </div>
                <div className="addToCart">
                    <button 
                    value="250" 
                    className="addToCartBut"
                    onClick={() => dispatch(
                        { type: "add", value: 250, item: "Iphone 11", src: "Iphone11"}
                    )}
                    >Add To Cart $250</button>
                </div>
            </div>
            <div className="productThree">
                <img className="productImg" alt="iphoneX" src={require('./assets/iphoneBlack.jpeg')} />
                <img className="productBackImg" alt="backgif" src={require('./assets/gif2.gif')} />
                <div className="productTitle" >
                    <h3>Iphone X</h3>
                </div>
                <div className="addToCart">
                    <button 
                    value="150" 
                    className="addToCartBut"
                    onClick={() => dispatch(
                        { type: "add", value: 150, item: "Iphone X", src: "IphoneBlack"}
                    )}
                    >Add To Cart $150</button>
                </div>
            </div>
        </div>
    )
}

export default ViewProducts