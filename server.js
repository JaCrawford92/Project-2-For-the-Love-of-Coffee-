require('dotenv').config()
require("./config/database")
const express = require('express')
const mongoose = require('mongoose')
const methodOverride = require('method-override')
const session = require('express-session')
const app = express()

// Importing the Recipe Model
const recipeRoutes = require('./routes/recipeRoutes.js')
const userController = require('./controllers/userController')
const sessionsController = require('./controllers/sessions.js')

// EJS
app.set('view engine', 'ejs')

// Middleware
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false
}))


app.use('/sessions', sessionsController)
app.use('/recipes', recipeRoutes)
app.use('/users', userController)

// Home Route
app.get('/', (req, res) => {
    res.send('For the love of Coffee')
    // res.render('recipe/index')
})

app.listen(process.env.PORT, () => {
    console.log('Your Coffee is brewing on port 3000')
})