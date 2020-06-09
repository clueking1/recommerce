import React, {useEffect, useState} from 'react'
import './style.css'


function ViewProducts() {
    const [backColor, setBackColor] = useState()

    useEffect(() => {
        let degree = -90
        let color = 1 
        let color1 = 1
        let color2 = 1
        setBackColor({backgroundImage : `-webkit-linear-gradient(90deg, rgb(15, 15, 15), rgb(22, 59, 90))`})
        function step2() {
            let int = setInterval(function (){ 
                if (degree !== -90) {
                    degree--
                    color--
                    color1--
                    color2--
                setBackColor({backgroundImage : `-webkit-linear-gradient(${degree}deg, rgb(15, 15, 15), rgb(${color1 / 8.22}, ${color2 / 3.06}, ${color / 2}))`})
                } 
                console.log('hi')
                if (degree === -90) {
                    clearInterval(int)
                    step1()
                 }
             }, 10)
        }
        function step1() {
        let int = setInterval(function (){ 
            if (degree !== 90) {
                degree++
                color++
                color1++
                color2++
            setBackColor({backgroundImage : `-webkit-linear-gradient(${degree}deg, rgb(15, 15, 15), rgb(${color1 / 8.22}, ${color2 / 3.06}, ${color / 2}))`})
            } 
            console.log('hi')
            if (degree === 90) {
                clearInterval(int)
                step2()
             }
         }, 10)
        }
        step1()
    }, [])

    return (
        <div className="productsWrapper">
            <div className="productOne" >
                <img className="productImg" alt="iphoneX" src={require('./assets/imageIphoneX.jpeg')} />
                <img className="productBackImg" alt="backgif" src={require('./assets/gif2.gif')} />
                <div className="productTitle" >
                    <h3>Iphone X</h3>
                </div>
                <div className="addToCart">
                    <button value="150" className="addToCartBut">Add To Cart $150</button>
                </div>
            </div>
            <div className="productTwo">
                <img className="productImg" alt="iphoneX" src={require('./assets/iphone11.jpg')} />
                <img className="productBackImg" alt="backgif" src={require('./assets/gif2.gif')} />
                <div className="productTitle" >
                    <h3>Iphone 11</h3>
                </div>
                <div className="addToCart">
                    <button value="250" className="addToCartBut">Add To Cart $250</button>
                </div>
            </div>
            <div className="productThree">
                <img className="productImg" alt="iphoneX" src={require('./assets/iphoneBlack.jpeg')} />
                <img className="productBackImg" alt="backgif" src={require('./assets/gif2.gif')} />
                <div className="productTitle" >
                    <h3>Iphone X</h3>
                </div>
                <div className="addToCart">
                    <button value="150" className="addToCartBut">Add To Cart $150</button>
                </div>
            </div>
        </div>
    )
}

export default ViewProducts