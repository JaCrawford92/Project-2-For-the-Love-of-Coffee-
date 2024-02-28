const bcrypt = require('bcrypt')
const router = require('express').Router()
const User = require('../models/User.js')

// GET /signup
router.get('/new', (req, res) => {
    res.render('sessions/new.ejs', {
        currentUser: req.session.currentUser
    })
})

module.exports = router