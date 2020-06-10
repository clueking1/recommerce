import React, { useEffect } from 'react'
import Home from './pages/home/home'
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Products from './pages/product/product'
import { AtcProvider, useAtcContext } from './components/utils/atcStore'

function App() {

    return (

            <Router>
                <div className="appWrapper">
                <AtcProvider>
                    <Switch>
                        <Home exact path="/"/>
                    </Switch>
                    <Switch>
                        <Products path="/products"/>
                    </Switch>
                    </AtcProvider>
                </div>
            </Router>

    )
}

export default App