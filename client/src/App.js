import React from 'react'
import Home from './pages/home/home'
import Login from './pages/login'
import Signup from './pages/signup'
import User from './pages/user'
import CheckOutPage from './pages/checkout'
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Products from './pages/product/product'
import { AtcProvider } from './components/utils/atcStore'
import { UserProvider } from './components/utils/userStore'

function App() {

    return (
        <UserProvider>
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
                        <Switch>
                            <Login path="/login"/>
                        </Switch>
                        <Switch>
                            <Signup path="/signup"/>
                        </Switch>
                        <Switch>
                            <User path="/user"/>
                        </Switch>
                    </div>
                </Router>
            </AtcProvider>
        </UserProvider>
    )
}

export default App