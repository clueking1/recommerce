import React from 'react'
import API from '../../utils/API'
import { useAtcContext } from '../../utils/atcStore'
import  { useHistory } from 'react-router-dom'

import './style.css'
import { PayPalButton } from "react-paypal-button-v2";
 
function PaypalBut(props) {
    const history = useHistory()
    const [, dispatch] = useAtcContext()
    return (
    <div className="paypal">
      <PayPalButton
        amount={props.tot}
        shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
        onSuccess={(details, data) => {
          alert("Transaction completed by " + details.payer.name.given_name);
        }}
        options={{
          clientId: "AdrJLpHD26pKdVkc6kHFzH6cCGPKyUb9TJXy9Kg1T57YjcoPU2QKFqpfV6Pma2g1EPdvJ54Zd0_32-Ya"
        }}
      />
      </div>
    );
  
}

export default PaypalBut