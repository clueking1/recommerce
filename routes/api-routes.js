const express = require('express')
const router = express.Router()
const stripe = require('stripe')('sk_test_hg1F05jmDlxPvEQxgTaycRog00hZxp09SX', {apiVersion: ''});

// router.get('/check', (req, res) => {
//     res.json('hi');
// });

  router.post("/check", async (req, res) => {

    const paymentIntent = await stripe.paymentIntents.create({
        amount: 1099,
        currency: 'usd',
        // Verify your integration in this guide by including this parameter
        metadata: {integration_check: 'accept_a_payment'},
      });
  
    // Send publishable key and PaymentIntent details to client
    res.json({
      publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
      clientSecret: paymentIntent.client_secret
    });
  });

module.exports = router