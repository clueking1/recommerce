import React, {useEffect} from 'react'
import Navbar from '../../components/addOns/navbar'
import { useAtcContext } from '../../components/utils/atcStore'
import { runGlobal } from '../../components/utils/globalStore'
import API from '../../components/utils/API'
import Stripecheckout from 'react-stripe-checkout'


function PaymentPage() {

    async function handleToken(token) {
       API.stripe({
           token: token
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
                amount={100}
                name={"Recommerce"}
            />
    
        </div>
    )
};


export default PaymentPage