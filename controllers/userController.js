const router = require('express').Router()
const bcrypt = require('bcrypt')
const User = require('../models/User.js')

// New User
router.get('/new', (req, res) => {
    res.render('users/new.ejs', {currentUser: req.session.currentUser})
})
module.exports = router