const express = require('express')
const cors = require('cors')
const app = express()
const user = require('./routes/api-routes')


app.use(cors())
app.use(user)
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static('public'))

const PORT = process.env.PORT || 7001



//   app.post("/check", async (req, res) => {

//     const paymentIntent = await stripe.paymentIntents.create({
//         amount: 1099,
//         currency: 'usd',
//         // Verify your integration in this guide by including this parameter
//         metadata: {integration_check: 'accept_a_payment'},
//       });
  
//     // Send publishable key and PaymentIntent details to client
//     res.json({
//       publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
//       clientSecret: paymentIntent.client_secret
//     });
//   });


  


app.listen(PORT, () => {
    console.log('http://localhost:' + PORT)
})