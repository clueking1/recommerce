import React from 'react'
import API from '../../components/utils/API'
import { useAtcContext } from '../../components/utils/atcStore'
import Stripecheckout from 'react-stripe-checkout'
import './style.css'


function PaymentPage(props) {
    const [state, dispatch] = useAtcContext()
    async function handleToken(token) {
       API.stripe({
           token: token,
           amount: props.tot
       })
       .then(res => {
          console.log(res)
       })
    }



    return (
        <div>
            <Stripecheckout 
                stripeKey="pk_test_WL5yO8B9zFTfDijtHpl1GDc500kjWndeSu"
                token={handleToken}
                amount={props.tot * 100}
                name={"Recommerce"}
            />
    
        </div>
    )
};


export default PaymentPage