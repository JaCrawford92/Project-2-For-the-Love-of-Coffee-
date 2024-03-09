const bcrypt = require('bcrypt')
const router = require('express').Router()
const User = require('../models/User.js').User
const Recipe = require('../models/User.js').Recipe


// GET /signup
router.get('/new', (req, res) => {
    res.render('sessions/new', {
        currentUser: req.session.currentUser
    })
})

// POST /sessions
router.post('/', async (req, res) => {
    // find the user
    try {
        const foundUser = await User.findOne({username: req.body.username})
        if(!foundUser){
            res.send('Coffee user not found')
        }else if(bcrypt.compareSync(req.body.password, foundUser.password)){
            req.session.currentUser = foundUser._id
            res.redirect('/')
        }else{
            res.send('Invalid Coffee Password')
        }

    }catch(err){
        console.log(err)
    }
})

// DELETE /sessions
router.delete('/', (req, res)=> {
    // destroy the session
    req.session.destroy(()=>{
        res.redirect('/')
    })
})

module.exports = router