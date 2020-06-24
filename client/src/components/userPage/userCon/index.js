import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useAtcContext } from '../../utils/atcStore'
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



function UserCon() {
    const history = useHistory()
    const [state, dispatch] = useAtcContext()
    const [item, setItem] = useState()
    const [userItems, setUserItems] = useState()
    const [value, setValue] = useState()
    const [dataUri, setDataUri] = useState()
    
    useEffect(() => {
        API.getProd()
        .then(res => {
            setUserItems(res.data)
        })
    },[])

    async function loguserout() {
        await API.logout()
        .then(res => {
            if (res.data === null) {
                //dispatch2({type: "loggedOut"})
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
                
                
            </div>
            <h2 className="uploadHeader">Your Items</h2>
                {userItems === undefined ? undefined : 
                <div>
                    {console.log(userItems)}
                    {userItems.map(t => (
                        <div className="productInfoWrapper" key={t.id}>
                            <img className="coImg" alt="prodImage" src={t.img} />
                            <div className="sellingInfo">
                            
                                <div className="prodNameDiv">
                                    
                                        <p className="productNameTit">Item</p> 
                                        <p className="productName">{t.item}</p> 
                                    
                                </div>
                                <div className="prodValDiv">
                                    
                                        <p className="productValueTit">Price</p> 
                                        <p className="productValue">${t.value}</p> 
                                    
                                </div>
                            
                                    
                                
                                
                            </div>
                        </div>
                    ))}
              
                
                </div>
            }
        </div>
    )
}

export default UserCon