import React from 'react'
import API from '../../components/utils/API'
import { useAtcContext } from '../../components/utils/atcStore'
import  { useHistory } from 'react-router-dom'
import Stripecheckout from 'react-stripe-checkout'
import './style.css'

function PaymentPage(props) {
    const history = useHistory()
    const [state, dispatch] = useAtcContext()
    async function handleToken(token) {
       API.stripe({
           token: token,
           amount: props.tot
       })
       .then(res => {
           console.log(res.data.status)
            if (res.data.status === "success") {
               dispatch({type: "splice"})
               sessionStorage.clear();
               history.push("/")
            } else {
                console.log("fail")
            }
       })
    }



    return (
        <div>
            <Stripecheckout 
                stripeKey="pk_test_WL5yO8B9zFTfDijtHpl1GDc500kjWndeSu"
                token={handleToken}
                amount={props.tot * 100}
                name={"Recommerce"}
                
            >
                <button className="proceed proceedBut">
                    Pay With Stripe 
                </button>
            </Stripecheckout>
    
        </div>
    )
};


export default PaymentPage