const express = require('express')
const cors = require('cors')
const path = require('path')
const session = require('express-session')

const app = express()
const user = require('./routes/api-routes')
const cookieParser = require('cookie-parser')
const passport = require('./models/passport')

app.use(cors())

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cookieParser())
app.use(express.static('public'))


app.set('trust proxy') // trust first proxy
app.use(session({ 
    secret: 'keyboard cat', 
    
    resave: true, 
    saveUninitialized: true}))
app.use(passport.initialize())
app.use(passport.session())
app.use(user)


const PORT = process.env.PORT || 7001
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }
app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
  });

app.listen(PORT, () => {
    console.log('http://localhost:' + PORT)
})