import React from 'react'
import Home from './pages/home'
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Products from './pages/product'

function App() {

    return (
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
    )
}

export default App