import React from 'react'
import  { useHistory } from 'react-router-dom'
import './style.css'

function Navbar() {
    const history = useHistory()
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
                <i 
                    class="fa fa-user" 
                    aria-hidden="true"
                    onClick={() => history.push('/login')}
                ></i>
            </div>
        </nav>
    )
}

export default Navbar