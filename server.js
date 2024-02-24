require('dotenv').config()
const express = require('express')
const methodOverride = require('method-override')
const session = require('express-session')

const app = express()
const port = 3000

// Middleware
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))
// app.use(sessoion({
//     secret: process.env.SECRET,
//     resave: false,
//     saveUninitialized: false
// }))

app.get('/', (req, res) => {
    res.send('For the love of Coffee')
})

app.listen(port, () => {
    console.log('Your Coffee is brewing on port 3000')
})