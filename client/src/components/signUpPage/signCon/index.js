import React from 'react'
import  { useHistory } from 'react-router-dom'
import './style.css'

function SignCon() {
    const history = useHistory()
    return (
        <div className="loginConWrapper">
            <div className="loginContent">
                <h2 className="loginHeader">Become a ReSeller!</h2>
                <div className="loginInputs">
                    <input className="emailSig" placeholder="email"/><br />
                    <input className="userNameSig" placeholder="username"/><br />
                    <input type="password" className="passwordSig" placeholder="password"/><br />
                    <input type="password" className="passwordSigCon" placeholder="confirm password"/><br />
                    <button className="sigBut">Sign Up</button><br />
                    
                </div>
            </div>
        </div>
    )
}

export default SignCon