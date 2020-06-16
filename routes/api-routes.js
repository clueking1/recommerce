const express = require('express')
const router = express.Router()
const stripe = require('stripe')('sk_test_hg1F05jmDlxPvEQxgTaycRog00hZxp09SX');
const uuid = require("uuidv4");

// router.get('/check', (req, res) => {
//     res.json('hi');
// });

//   router.post("/check", async (req, res) => {

//     const paymentIntent = await stripe.paymentIntents.create({
//         amount: 1099,
//         currency: 'usd',
//         client_secret: 'sk_test_hg1F05jmDlxPvEQxgTaycRog00hZxp09SX',
//         metadata: {integration_check: 'accept_a_payment'},
//       });
  
//     // Send publishable key and PaymentIntent details to client
//     res.json({
//       publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
//       clientSecret: paymentIntent.client_secret
//     });
//   });

  router.post("/check", async (req, res) => {
    console.log("Request:", req.body);
    
    let error;
    let status;
    try {
      const { token } = req.body;
  
      const customer = await stripe.customers.create({
        email: token.email,
        source: token.id
      });
  
      //const idempotency_key = uuid();
      const charge = await stripe.charges.create(
        {
          amount: 100,
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