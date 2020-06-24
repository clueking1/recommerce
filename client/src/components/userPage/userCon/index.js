import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useUserContext } from '../../utils/userStore'
import Amplify, { Auth, Storage } from "aws-amplify"
import API from '../../utils/API'
import './style.css'


const fileToDataUri = (file) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      resolve(event.target.result)
    };
    //reader.readAsDataURL(file);
    console.log(reader.readAsDataURL(file))
})

Amplify.configure({
    Auth: {
        identityPoolId: 'us-east-1_Afgyebezr', //REQUIRED - Amazon Cognito Identity Pool ID
        region: 'us-east-2', // REQUIRED - Amazon Cognito Region
        userPoolId: 'XX-XXXX-X_abcd1234', //OPTIONAL - Amazon Cognito User Pool ID
        userPoolWebClientId: 'XX-XXXX-X_abcd1234', //OPTIONAL - Amazon Cognito Web Client ID
    },
    Storage: {
        AWSS3: {
            bucket: 'recommerceimages', //REQUIRED -  Amazon S3 bucket
            region: 'us-east-1', //OPTIONAL -  Amazon service region
        }
    }
});

function UserCon() {
    const history = useHistory()
    const [, dispatch2] = useUserContext()
    const [item, setItem] = useState()
    const [value, setValue] = useState()
    const [dataUri, setDataUri] = useState()
    

    async function loguserout() {
        await API.logout()
        .then(res => {
            if (res.data === null) {
                dispatch2({type: "loggedOut"})
                history.push('/')
            }
            
        })

    }

    const uploadImage = async (file) => {
        
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
      console.log(dataUri)
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
                
                <img src={dataUri} />
            </div>

        </div>
    )
}

export default UserCon