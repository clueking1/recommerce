import React from 'react'
import './style.css'

function Navbar() {

    return (
        <nav className="navBar">
            <div className="navTitleDiv">
                <h3 className="navTitle">
                    <a className="navTitleA" href="/">
                        <span className="navTitleRe">Re</span>
                        <span className="navTitleCom">Commerce</span>
                    </a>
                </h3>
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