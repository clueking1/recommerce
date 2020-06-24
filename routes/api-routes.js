const express = require('express')
const router = express.Router()
const passport = require('../models/passport')
const db = require('../models/user')
const upload = require('../models/uploadImage')
const con = require('../config/config')
const stripe = require('stripe')('sk_test_hg1F05jmDlxPvEQxgTaycRog00hZxp09SX');
const isAuthenticated = require('../models/middleware/isAuth')

const { Store } = require('express-session')

    router.post('/user', (req, res) => {
        db.create(
            req.body.username,
            req.body.email,
            req.body.password,
         )
         .then(result => {
           res.json(result)
         })
    })
    router.post('/api/login', passport.authenticate('local'), (req, res) => {
        console.log(req.user[0])
        res.json(req.user[0])
    })
    router.get('/logout', (req, res) => {
        req.logout()
        res.json(req.user)
    })
    router.post('/upload', (req, res) => {
        upload.upload(
            req.body.item,
            req.body.value,
            req.body.img,
            req.user[0].userId
        )
        .then(results => {
            res.json(results)
        })
    })
    router.get('/checklog', isAuthenticated, (rq, res) => {
        
    })
    router.get('/items', (req, res) => {
       upload.images()
       .then(results => {
            res.json(results)
       })
    })
    router.get('/userProd', (req, res) => {
        con.query("SELECT * FROM photo WHERE userId = ?",[req.user[0].userId], (err, data) => {
            if (err) throw err
            res.json(data)
        })
     })
//   router.post("/check", async (req, res) => {
//     console.log("Request:", req.body);
    
//     let error;
//     let status;
//     try {
//       const { token, amount } = req.body;
  
//       const customer = await stripe.customers.create({
//         email: token.email,
//         source: token.id
//       });
  
//       //const idempotency_key = uuid();
//       const charge = await stripe.charges.create(
//         {
//           amount: amount * 100,
//           currency: "usd",
//           customer: customer.id,
//           receipt_email: token.email,
//           description: `Purchased the `,
          
//         }
//       );
//       console.log("Charge:", { charge });
//       status = "success";
//     } catch (error) {
//       console.error("Error:", error);
//       status = "failure";
//     }
  
//     res.json({ error, status });
//   });


module.exports = router