import React from 'react'
import { useHistory } from 'react-router-dom'
import { useUserContext } from '../../utils/userStore'



function UserCon() {
    const history = useHistory()
    const [state, dispatch2] = useUserContext()
    console.log(state)
    function logout() {
        localStorage.setItem('user', 'false')
        dispatch2({type: "loggedOut"})
        history.push('/')

    }
    return (
        <div>
            <button onClick={() => logout()}>Log Out</button>
        </div>
    )
}

export default UserCon