import React, {useEffect, useState} from 'react'
import { useAtcContext } from '../../utils/atcStore'
import { runGlobal, updateGlobal} from '../../utils/globalStore'
import './style.css'


function ViewProducts(props) {
    console.log(props)
    const [state, dispatch] = useAtcContext()
    const [flip, setFlip] = useState(true)
        useEffect(() => {
            runGlobal(dispatch)
        }, [dispatch])

        useEffect(() => {
            updateGlobal(state)
        }, [state])
        

       function stateLen(it) {
           console.log(it)
            if (state.length === 0) {
                dispatch({type: "add", value: it.value, item: it.item, src: it.src, id: it.id })
                setFlip(!flip)
            } else {
                plusAdd(it) 
            }
        }
        
      function plusAdd(it) {

        let index = state.map(e =>  e.src).indexOf(it.src)
        
        if (index !== -1) {
            dispatch({type: "plus", src: it.src, oSrc: index})
        } else {
            dispatch({type: "add", value: it.value, item: it.item, src: it.src, id:it.id })
        }
        setFlip(!flip)
      }

    return (
        <div className="productsWrapper">
            {props.items.map(t => (
                 <div className="productOne"  key={t.photoId}>
                 <img className="productImg" alt="iphoneX" src={t.img} />
                 
                 
                 <div className="productTitle" >
                     <h3>{t.item}</h3>
                 </div>
                 <div className="addToCart">
                     <button 
                     value="150" 
                     className="addToCartBut"
                     onClick={() => stateLen(
                         { type: "add", value: t.value, item: t.item, src: t.img, id:t.photoId}
                     )}
                     >Add To Cart ${t.value}</button>
                 </div>
             </div>

            ))}
            <div className="productOne" >
                <img className="productImg" alt="iphoneX" src={require('./assets/imageIphoneX.jpeg')} />
                
                
                <div className="productTitle" >
                    <h3>Iphone X</h3>
                </div>
                <div className="addToCart">
                    <button 
                    value="150" 
                    className="addToCartBut"
                    onClick={() => stateLen(
                        { type: "add", value: 150, item: "Iphone X", src: "IphoneWhite"}
                    )}
                    >Add To Cart $150</button>
                </div>
            </div>
            <div className="productOne">
                <img className="productImg" alt="iphoneX" src={require('./assets/iphone11.jpg')} />

                <div className="productTitle" >
                    <h3>Iphone 11</h3>
                </div>
                <div className="addToCart">
                    <button 
                    value="250" 
                    className="addToCartBut"
                    onClick={() => stateLen(
                        { type: "add", value: 250, item: "Iphone 11", src: "Iphone11", quan: 1}
                    )}
                    >Add To Cart $250</button>
                </div>
            </div>
            <div className="productOne">
                <img className="productImg" alt="iphoneX" src={require('./assets/iphoneBlack.jpeg')} />

                <div className="productTitle" >
                    <h3>Iphone X</h3>
                </div>
                <div className="addToCart">
                    <button 
                    value="150" 
                    className="addToCartBut"
                    onClick={() => stateLen(
                        { type: "add", value: 150, item: "Iphone X", src: "IphoneBlack"}
                    )}
                    >Add To Cart $150</button>
                </div>
            </div>
            <div className="productOne">
                <img className="productImg" alt="iphoneX" src={require('./assets/iphoneBlack.jpeg')} />

                <div className="productTitle" >
                    <h3>Iphone X</h3>
                </div>
                <div className="addToCart">
                    <button 
                    value="150" 
                    className="addToCartBut"
                    onClick={() => stateLen(
                        { type: "add", value: 150, item: "Iphone X", src: "IphoneBlack"}
                    )}
                    >Add To Cart $150</button>
                </div>
            </div>
        </div>
    )
}

export default ViewProducts