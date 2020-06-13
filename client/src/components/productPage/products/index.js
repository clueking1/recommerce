import React, {useEffect} from 'react'
import { useAtcContext, AtcProvider } from '../../utils/atcStore'
import { runGlobal, updateGlobal} from '../../utils/globalStore'
import './style.css'


function ViewProducts() {
    console.log(AtcProvider.runGlobal)

    const [state, dispatch] = useAtcContext()

        useEffect(() => {
            runGlobal(dispatch)
        }, [dispatch])

        useEffect(() => {
            updateGlobal(state)
        }, [state])

       function dispatc(it) {
            if (state.length === 0) {
                dispatch({type: "add", value: it.value, item: it.item, src: it.src})
            } else {
                dispat(it)
            }
        }
        
       function dispat(it) {
           let check = state.filter(t => t.src === it.src)
      
           if(check.length !== 0){
            dispatch({type: "plus", value: it.value, item: it.item, src: it.src})
   
            } else {
            dispatch({type: "add", value: it.value, item: it.item, src: it.src})
            }
        }
    console.log(state)
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
                    onClick={() => dispatc(
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
                    onClick={() => dispatc(
                        { type: "add", value: 250, item: "Iphone 11", src: "Iphone11", quan: 1}
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
                    onClick={() => dispatc(
                        { type: "add", value: 150, item: "Iphone X", src: "IphoneBlack"}
                    )}
                    >Add To Cart $150</button>
                </div>
            </div>
        </div>
    )
}

export default ViewProducts