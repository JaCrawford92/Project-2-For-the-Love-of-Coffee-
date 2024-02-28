require('dotenv').config()
require("./config/database")
const express = require('express')
const mongoose = require('mongoose')
const methodOverride = require('method-override')
// const  recipeRoutes = require('./routes/recipeRoutes')
// const recipeController = require('./controllers/recipeController');
// const session = require('express-session')

const app = express()
const port = 3000

// EJS
app.set('view engine', 'ejs')

// Middleware
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))


// Home Route
app.get('/', (req, res) => {
    res.send('For the love of Coffee')
    // res.render('recipe/index')
})

app.listen(port, () => {
    console.log('Your Coffee is brewing on port 3000')
})