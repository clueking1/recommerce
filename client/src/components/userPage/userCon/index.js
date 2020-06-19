import React from 'react'
import { useHistory } from 'react-router-dom'
import { useUserContext } from '../../utils/userStore'



function UserCon() {
    const history = useHistory()
    const [, dispatch] = useUserContext()
    function logout() {
        
            localStorage.setItem('user', 'false')
            dispatch({type: "loggedOut"})
            history.push('/')

    }
    return (
        <div>
            <button onClick={() => logout()}>Log Out</button>
        </div>
    )
}

export default UserCon