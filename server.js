const express = require('express')
const cors = require('cors')
const app = express()
const user = require('./routes/api-routes')


app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static('public'))
app.use(user)


const PORT = process.env.PORT || 7001

app.listen(PORT, () => {
    console.log('http://localhost:' + PORT)
})