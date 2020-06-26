import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useUserContext } from '../../utils/userStore'
import Compressor from 'compressorjs';
import API from '../../utils/API'
import './style.css'


const fileToDataUri = (file) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      resolve(event.target.result)
    };
    reader.readAsDataURL(file);
})

function UserCon() {
    const history = useHistory()
    const [, dispatch] = useUserContext()
    const [item, setItem] = useState()
    const [userItems, setUserItems] = useState()
    const [value, setValue] = useState()
    const [dataUri, setDataUri] = useState()
    const [confirm, setConfirm] = useState(true)
    const [flip, setFlip] = useState(true)
  
    useEffect(() => {
        API.getProd()
        .then(res => {
            setUserItems(res.data)
        })
    },[flip])


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
        new Compressor(file, {
            quality: .4,
            maxHeight: 350,
            maxwidth: 350,
            success(result) {
                fileToDataUri(result)
                .then(dataUri => {
                  setDataUri(dataUri)
              })
            },
            error(err) {
              console.log(err.message);
            },
          });

      }
      async function uploadItem() {
          await API.upload({
              item: item,
              value: value,
              img: dataUri
          })
          .then(res => {
             document.querySelector('.itemIn').value = ""
             document.querySelector('.itemVal').value = ""
             console.log(document.querySelector('.imgIn'))
             
             setFlip(!flip)
          })
      }
      function yesNo(check, id) {
          if (check === "yes") {
              API.deleteProd({
                  id : id
              })
              .then (res => {
                setConfirm(!confirm)
                setFlip(!flip)
              })
              
          } else {
            setConfirm(!confirm)
          }
      }
      
    return (
        <div className="userCon">
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
                    {/* <br style={breakIt} /> */}
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
                        <div className="sellInfoWrapper" key={t.photoId}>
                            <img className="sellImg" alt="prodImage" src={t.img} />
                            <div className="sellingInfo">
                            {confirm === true ? 
                                <div>
                                <div className="sellNameDiv">
                                    
                                        <p className="selltNameTit">Item</p> 
                                        <p className="sellName">{t.item}</p> 
                                    
                                </div>
                                <div className="sellValDiv">
                                    
                                        <p className="sellValueTit">Price</p> 
                                        <p className="sellValue">${t.value}</p> 
                                    
                                </div>
                                </div> : undefined}
                                {confirm === true ? 
                                <div className="remove">
                                    <i 
                                    className="fa fa-remove" 
                                    style={{fontSize : "48px",color:"red"}}
                                    onClick={() => setConfirm(!confirm)}
                                    ></i>
                                </div> : 
                                <div className="remove2">
                                    <p>Remove Item?</p>
                                    <div className="yesNo">
                                    <i 
                                    className="x"
                                    onClick={() => yesNo("yes", t.photoId)}
                                    >Yes</i>
                             
                                    <i 
                                    className="x2"
                                    onClick={() => yesNo("no")}
                                    >No</i>
                                    </div>
                                </div>}
                                    
                                
                                
                            </div>
                        </div>
                    ))}
              
                
                </div>
            }
        </div>
    )
}

export default UserCon