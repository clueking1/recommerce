import React from 'react'
import './style.css'

function LoginCon() {
    return (
        <div className="loginConWrapper">
            <div className="loginContent">
                <h2 className="loginHeader">Welcome, ReSeller!</h2>
                <input className="userNameLog" placeholder="username"/><br />
                <input className="passwordLog" placeholder="password"/><br />
                <button className="loginBut">Login</button><br />
                <button className="resellerBut">Become a ReSeller</button>
            </div>
        </div>
    )
}

export default LoginCon