import React, { useEffect, useState } from 'react'
import Home from './pages/home/home'
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Products from './pages/product/product'
import { AtcProvider, useAtcContext } from './components/utils/atcStore'

function App() {


    // function GlobalState() {
    //     let atc = sessionStorage.getItem('atc')
    //     const [state, dispatch] = useAtcContext()
    //     return (
    //         <AtcProvider


     
    //         {...(JSON.parse(atc) !== null) (
    //             JSON.parse(atc).map(t => dispatch({type: "add", value: t.value, item: t.item, src: t.src}))
    //         )}



    //         {...(state.length > 1) (
    //             sessionStorage.setItem('atc', JSON.stringify(state))
    //         )}
      
    //         ></AtcProvider>
    //     )
    // }
    

    return (
        <AtcProvider>
            <Router>
                <div className="appWrapper">
          
                    <Switch>
                        <Home exact path="/"/>
                    </Switch>
                    <Switch>
                        <Products path="/products"/>
                    </Switch>
             
                </div>
            </Router>
        </AtcProvider>
    )
}

export default App