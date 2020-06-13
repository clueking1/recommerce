import React, {useState, useEffect} from 'react'
import './style.css'

function HomePageCon() {

    const [op, setOp] = useState()

    useEffect(() => {
        let color = 1 
        let start = 0
        setOp({opacity : "0"})
        let int = setInterval(function (){ 
            if (color !== 0) {
     
                color++
                start += color / 181
            //setOp({opacity : `${start / 181}`, transform: `scale(${start / 181})`, webkitTransform:  `scale(${start / 181})`})
            setOp({opacity : `${start / 181}`})
            } 
            if (op > 1) {
                clearInterval(int)
             }
         }, 7)
       
        setInterval(function (){ 
            clearInterval(int)
        }, 1800)
       
         
    }, [])

    return (
        <div className="homePageCon">
            <h2 className="homeTitle">
                <span className="homeTitleRe a">Re</span>
                <span className="homeTitleCom a">COMMERCE</span>
            </h2>
            <h2 className="homeRev" style = {op}>
                <span className="homeRevRe a">Re</span>
                <span className="homeRevCom a">MEMBER</span>
                <span className="homeIn a">TO</span>
                <span className="homeSelRe a">Re</span>
                <span className="homeSelCom a">SELL</span>
            </h2>
        </div>
    )
}

export default HomePageCon