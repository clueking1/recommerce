import React from 'react'
import { useHistory } from 'react-router-dom'
import { useUserContext } from '../../utils/userStore'
import API from '../../utils/API'
import './style.css'


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
            <h2 className="uploadHeader">Resell</h2>
            <div className="uploadDiv">
                <div className="uploadInputs">
                    <label className="itemLa">Item: </label>
                    <input type="text" className="itemIn" />
                    <label className="itemValLa">$</label>
                    <input type="text" className="itemVal" />
                    <label classname="imgLa" for="img">Select image:</label>
                    <input classname="imgIn" type="file" id="img" name="img" accept="image/*"></input><br />
                </div>
                <div className="uploadBut">
                    <button type="submit" className="itemSub">ReSell Item</button>
                </div>
            </div>

        </div>
    )
}

export default UserCon