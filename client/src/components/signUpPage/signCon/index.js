import React, {useState} from 'react'
import API from '../../utils/API'
import  { useHistory } from 'react-router-dom'
import './style.css'

function SignCon() {
    const history = useHistory()
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [passwordCon, setPasswordCon] = useState('')
    //Alert text
    const [alertText, setAlert] = useState({
        text: '',
        there: false,
        type: ''
    })

    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    function handleSubmit(e) {
   
        if (!email.match(mailformat)) {
            setAlert({
                text:  'Uh oh! Invalid Email Address!',
                there:  true,
                type: 'danger'
              })
            return
        } else if (password.length < 5) {
            setAlert({
              text:  'Password must be more than 5 characters!',
              there:  true,
              type: 'danger'
            })
            return
        } else if (password !== passwordCon) {
            setAlert({
                text:  "Password don't match! Make sure they do!",
                there:  true,
                type: 'danger'
              })
            return
        } else {
            search()
        }
    };

    function search() {
        API.createUser({
            username: username,
            email: email,
            password: password
        })
        .then(res => {
            if(res.data === 'user') {
                setAlert({
                    text:  "Uh oh! This username is taken!",
                    there:  true,
                    type: 'danger'
                  })
            } else if(res.data === 'email') {
                setAlert({
                    text:  "Uh oh! This email is already in use!",
                    there:  true,
                    type: 'danger'
                  })
            } else if(res.data === 'userCreated') {
                setAlert({
                    text:  "Welcome! Go back to login and login!",
                    there:  true,
                    type: 'success'
                  })
                  
            } else {
                return
            }

        })
    }
    return (
        <div className="loginConWrapper">
            <div className="loginContent">
                <h2 className="loginHeader">Become a ReSeller!</h2>
                <div className="loginInputs">
                    <input 
                        className="emailSig" 
                        placeholder="email"
                        onChange = {e => setEmail(e.target.value) }
                    /><br />
                    <input 
                        className="userNameSig" 
                        placeholder="username"
                        onChange = {e => setUsername(e.target.value) }
                    /><br />
                    <input 
                        type="password" 
                        className="passwordSig" 
                        placeholder="password"
                        onChange = {e => setPassword(e.target.value) }
                    /><br />
                    <input 
                        type="password" 
                        className="passwordSigCon" 
                        placeholder="confirm password"
                        onChange = {e => setPasswordCon(e.target.value) }
                    /><br />
                    <button className="sigBut" onClick={()=> handleSubmit()}>Sign Up</button><br />
                    
                </div>
            </div>
        </div>
    )
}

export default SignCon