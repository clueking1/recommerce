import React from 'react'
import Home from './pages/home/home'
import CheckOutPage from './pages/checkout'
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Products from './pages/product/product'
import { AtcProvider } from './components/utils/atcStore'

function App() {

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
                    <Switch>
                        <CheckOutPage path="/checkout"/>
                    </Switch>
             
                </div>
            </Router>
        </AtcProvider>
    )
}

export default App