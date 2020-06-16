const express = require('express')
const cors = require('cors')
const path = require('path')
const app = express()
const user = require('./routes/api-routes')


app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static('public'))
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