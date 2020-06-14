import React, { useEffect, useState } from 'react'
import './style.css'

function HomePage() {

    const [backColor, setBackColor] = useState()

    useEffect(() => {
        let degree = -90
        let color = 1 
        let color1 = 1
        let color2 = 1
        setBackColor({backgroundImage : `-webkit-linear-gradient(90deg, rgb(15, 15, 15), rgb(22, 59, 90))`})
        let int = setInterval(function (){ 
            if (degree !== 90) {
                degree++
                color++
                color1++
                color2++
            setBackColor({backgroundImage : `-webkit-linear-gradient(${degree}deg, rgb(15, 15, 15), rgb(${color1 / 8.22}, ${color2 / 3.06}, ${color / 2}))`})
            } 
            if (degree === 90) {
                clearInterval(int)
             }
         }, 10)
    }, [])

    return (
        <div className="homePageWrapper">
            <div className="homePageColor" style={backColor}>
                
            </div>
        </div>
    )
}

export default HomePage