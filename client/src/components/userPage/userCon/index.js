import React from 'react'
import { useHistory } from 'react-router-dom'
import { useUserContext } from '../../utils/userStore'
import API from '../../utils/API'


function UserCon() {
    const history = useHistory()
    const [, dispatch2] = useUserContext()


    async function loguserout() {
        await API.logout()
        .then(res => {
            if (res.data === null) {
                dispatch2({type: "loggedOut"})
                history.push('/')
            }
            
        })

    }
    return (
        <div>
            <button onClick={() => loguserout()}>Log Out</button>
        </div>
    )
}

export default UserCon