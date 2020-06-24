import React, {useEffect, useState} from 'react'
import { useAtcContext } from '../../utils/atcStore'
import { runGlobal, updateGlobal} from '../../utils/globalStore'
import './style.css'


function ViewProducts(props) {
    
    const [state, dispatch] = useAtcContext()
    console.log(state)
    const [flip, setFlip] = useState(true)
        useEffect(() => {
            console.log('awwww1')
            runGlobal(dispatch)
        }, [dispatch])

        useEffect(() => {
            console.log('awwww2')
            updateGlobal(state)
        }, [state])
        

       function stateLen(it) {
           console.log('awwww')
            if (state.length === 0) {
                dispatch({type: "add", value: it.value, item: it.item, src: it.src, id: it.id })
                setFlip(!flip)
            } else {
                plusAdd(it) 
            }
        }
        
      function plusAdd(it) {
        console.log('awwww4')
        let index = state.map(e =>  e.id).indexOf(it.id)
        
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
            
        </div>
    )
}

export default ViewProducts