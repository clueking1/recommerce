import React from 'react'
import Home from './pages/home/home'
import CheckOutPage from './pages/checkout'
import PaymentPage from './pages/payment'
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Products from './pages/product/product'
import { AtcProvider } from './components/utils/atcStore'
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
const stripePromise = loadStripe("pk_test_WL5yO8B9zFTfDijtHpl1GDc500kjWndeSu");


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