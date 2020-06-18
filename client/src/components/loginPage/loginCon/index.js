import React from 'react'
import  { useHistory } from 'react-router-dom'
import './style.css'

function LoginCon() {
    const history = useHistory()
    return (
        <div className="loginConWrapper">
            <div className="loginContent">
                <h2 className="loginHeader">Welcome, ReSeller!</h2>
                <div className="loginInputs">
                    <input className="userNameLog" placeholder="username"/><br />
                    <input type="password" className="passwordLog" placeholder="password"/><br />
                    <button className="loginBut">Login</button><br />
                    <button 
                        className="resellerBut"
                        onClick={() => history.push('/signup')}
                    >Become a ReSeller</button>
                </div>
            </div>
        </div>
    )
}

export default LoginCon