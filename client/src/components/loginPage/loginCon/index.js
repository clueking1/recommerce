import React, {useState} from 'react'
import  { useHistory } from 'react-router-dom'
import API from '../../utils/API'
import { useUserContext } from '../../utils/userStore'
import './style.css'

function LoginCon() {
    const [, dispatch] = useUserContext()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const history = useHistory()

    function handleSubmit() {
        API.login({
            username: username,
            password: password
        })
        .then(res => {
            console.log(res)
            if (res.status === 200) {
                localStorage.setItem('user', 'true')
                dispatch({type: "loggedIn"})
                history.push('/user')
            }
        })
    }
    return (
        <div className="loginConWrapper">
            <div className="loginContent">
                <h2 className="loginHeader">Welcome, ReSeller!</h2>
                <div className="loginInputs">
                    <input 
                        className="userNameLog" 
                        placeholder="username"
                        onChange = {e => setUsername(e.target.value) }
                    /><br />
                    <input 
                        type="password" 
                        className="passwordLog" 
                        placeholder="password"
                        onChange = {e => setPassword(e.target.value) }
                    /><br />
                    <button 
                        className="loginBut"
                        onClick={() => handleSubmit()}
                    >Login</button><br />
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