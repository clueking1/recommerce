import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useUserContext } from '../../utils/userStore'
import API from '../../utils/API'
import './style.css'

const fileToDataUri = (file) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      resolve(event.target.result)
    };
    console.log(reader.readAsDataURL(file));
    })


function UserCon() {
    const history = useHistory()
    const [, dispatch2] = useUserContext()
    const [item, setItem] = useState('')
    const [value, setValue] = useState(0)
    const [dataUri, setDataUri] = useState('')


    async function loguserout() {
        await API.logout()
        .then(res => {
            if (res.data === null) {
                dispatch2({type: "loggedOut"})
                history.push('/')
            }
            
        })

    }

    const uploadImage = (file) => {
    
        if(!file) {
          setDataUri('');
          return;
        }
    
        fileToDataUri(file)
          .then(dataUri => {
            setDataUri(dataUri)
            
          })
          
      }
      async function uploadItem() {
       await API.upload({
              item: item,
              value: value,
              img: dataUri
          })
          .then(res => {
              console.log(res)
          })
      }

    return (
        <div>
            <button onClick={() => loguserout()}>Log Out</button>
            <h2 className="uploadHeader">Resell</h2>
            <div className="uploadDiv">
                <div className="uploadInputs">
                    <label className="itemLa">Item: </label>
                    <input 
                        type="text" 
                        className="itemIn" 
                        onChange={(e) => setItem(e.target.value)}
                    />
                    <label className="itemValLa">$</label>
                    <input 
                        type="text" 
                        className="itemVal" 
                        onChange={(e) => setValue(Number(e.target.value))}
                    />
                    <label classname="imgLa" for="img">Select image:</label>
                    <input 
                        classname="imgIn" 
                        type="file" 
                        id="img" 
                        name="img"
                        onChange={e => uploadImage(e.target.files[0])}
                        accept="image/*"
                    ></input><br />
                </div>
                <div className="uploadBut">
                    <button 
                        type="submit" 
                        className="itemSub"
                        onClick={() => uploadItem()}
                    >ReSell Item</button>
                </div>
                
            </div>

        </div>
    )
}

export default UserCon