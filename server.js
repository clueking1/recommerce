const express = require('express')
const app = express()

const PORT = process.env.PORT || 7001

app.listen(PORT, () => {
    console.log('http://localhost:' + PORT)
})