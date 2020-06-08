import React from 'react'
import './style.css'

function ViewProducts() {

    return (
        <div className="productsWrapper">
            <div className="productOne">
                <img className="productImg" alt="iphoneX" src={require('./assets/imageIphoneX.jpeg')} />
                <div className="productTitle">
                    <h3>Iphone X</h3>
                </div>
                <div className="addToCart">
                    <button value="150" className="addToCartBut">Add To Cart $150</button>
                </div>
            </div>
            <div className="productTwo">
                <img className="productImg" alt="iphoneX" src={require('./assets/iphone11.jpg')} />
                <div className="productTitle">
                    <h3>Iphone 11</h3>
                </div>
                <div className="addToCart">
                    <button value="250" className="addToCartBut">Add To Cart $250</button>
                </div>
            </div>
            <div className="productThree">
                <img className="productImg" alt="iphoneX" src={require('./assets/iphoneBlack.jpeg')} />
                <div className="productTitle">
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