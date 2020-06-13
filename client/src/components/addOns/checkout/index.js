import React, { useEffect } from 'react'
import { useAtcContext } from '../../utils/atcStore'
import './style.css'

function Checkout() {

    const [state, dispatch] = useAtcContext()
    const data = [];
    useEffect(() => {
        for(let issue of state){
            let entryFound = false;
            let tempObj = {
                item: issue.item,
                value: issue.value,
                src: issue.src,
                quantity: 1
            };
        
            for(let item of data){
        
                if(item.src === tempObj.src){
                item.quantity++;
                entryFound = true;
                break;
              }
            }
        
            if(!entryFound){
                data.push(tempObj);
            }
        }
    }, [state])


console.log(data, 'hi')
    
    return (
        <a className="coWrapper" href="/checkout">
            <div>
                <h2>Checkout!</h2>
            </div>
        </a>
    )
}

export default Checkout