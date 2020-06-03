import React from 'react'
import './style.css'

function Navbar() {

    return (
        <nav className="navBar">
            <div className="navTitleDiv">
                <a className="navTitleA" href="/">
                    <h3 className="navTitle">
                        <span className="navTitleRe">Re</span>
                        <span className="navTitleCom">Commerce</span>
                    </h3>
                </a>
            </div>
            <div className="navAboutDiv">
                <a className="navAboutA" href="/about">
                    About
                </a>
            </div>
            <div className="navProductsDiv">
                <a className="navProductsA" href="/products">
                    Products
                </a>
            </div>
            <div className="navCart">
                <h3>H</h3>
            </div>
        </nav>
    )
}

export default Navbar