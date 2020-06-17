const express = require('express')
const router = express.Router()
const stripe = require('stripe')('sk_test_hg1F05jmDlxPvEQxgTaycRog00hZxp09SX');


  router.post("/check", async (req, res) => {
    console.log("Request:", req.body);
    
    let error;
    let status;
    try {
      const { token, amount } = req.body;
  
      const customer = await stripe.customers.create({
        email: token.email,
        source: token.id
      });
  
      //const idempotency_key = uuid();
      const charge = await stripe.charges.create(
        {
          amount: amount * 100,
          currency: "usd",
          customer: customer.id,
          receipt_email: token.email,
          description: `Purchased the `,
          
        }
      );
      console.log("Charge:", { charge });
      status = "success";
    } catch (error) {
      console.error("Error:", error);
      status = "failure";
    }
  
    res.json({ error, status });
  });


module.exports = router