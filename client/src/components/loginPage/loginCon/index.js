import React from 'react'
import './style.css'

function LoginCon() {
    return (
        <div className="loginConWrapper">
            <div className="loginContent">
                <h2 className="loginHeader">Welcome, ReSeller!</h2>
                <div className="loginInputs">
                    <input className="userNameLog" placeholder="username"/><br />
                    <input type="password" className="passwordLog" placeholder="password"/><br />
                    <button className="loginBut">Login</button><br />
                    <button className="resellerBut">Become a ReSeller</button>
                </div>
            </div>
        </div>
    )
}

export default LoginCon