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
                    <button className="addToCartBut">Add To Cart $150</button>
                </div>
            </div>
            
        </div>
    )
}

export default ViewProducts