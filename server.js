const express = require('express')

const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('For the love of Coffee')
})

app.listen(port, () => {
    console.log('Your Coffee is brewing on port 3000')
})