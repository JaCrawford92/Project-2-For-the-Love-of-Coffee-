require('dotenv').config()
const express = require('express')
const app = express()
require('./config/database')
const methodOverride = require('method-override')
const session = require('express-session')


// Importing the Recipe Model
const recipeRoutes = require('./routes/recipes.js')
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




app.use('/recipes', recipeRoutes)
app.use('/users', userController)
app.use('/sessions', sessionsController)

// Home Route
app.get('/', (req, res) => {
    // res.send('For the love of Coffee')
    res.redirect('/recipes')
    // res.render('index, {currentUser: req.session.currentUser}')
})

app.listen(process.env.PORT, () => {
    console.log('Your Coffee is brewing on port 3000')
})