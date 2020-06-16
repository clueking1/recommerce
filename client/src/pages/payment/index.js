import React from 'react'
import API from '../../components/utils/API'
import { useAtcContext } from '../../components/utils/atcStore'
import Stripecheckout from 'react-stripe-checkout'
import './style.css'

const CARD_OPTIONS = {
    iconStyle: 'solid',
    style: {
      base: {
        iconColor: '#c4f0ff',
        color: '#fff',
        fontWeight: 500,
        fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
        fontSize: '50px',
        fontSmoothing: 'antialiased',
        ':-webkit-autofill': {
          color: '#fce883',
        },
        '::placeholder': {
          color: '#87bbfd',
        },
      },
      invalid: {
        iconColor: '#ffc7ee',
        color: '#ffc7ee',
      },
    },
  };


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
                
            >
                <button className="proceed proceedBut">
                    Pay With Stripe 
                </button>
            </Stripecheckout>
    
        </div>
    )
};


export default PaymentPage