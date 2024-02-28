const bcrypt = require('bcrypt')
const router = require('express').Router()
const User = require('../models/User.js')
const { rawListeners } = require('../models/recipe.js')

// GET /signup
router.get('/new', (req, res) => {
    res.render('sessions/new.ejs', {
        currentUser: req.session.currentUser
    })
})

// POST /sessions
router.post('/', async (req, res) => {
    try {
        const foundUser = await User.findOne({username: req.body.username})
        if(!foundUser){
            res.send('Coffee user not found')
        }else if(bcrypt.compareSync(req.body.password, foundUser.password)){
            raq.session.currentUser = foundUser.username
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
    req.session.destroy(()=>{
        res.redirect('/')
    })
})

module.exports = router