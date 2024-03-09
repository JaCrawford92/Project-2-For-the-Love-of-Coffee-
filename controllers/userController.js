const router = require('express').Router()
const bcrypt = require('bcrypt')
const User = require('../models/User').User
const Recipe = require('../models/User').Recipe

//Used GA lesson as a guide to create the routes for the user model
// New User
router.get('/new', (req, res) => {
    res.render('users/new.ejs', {currentUser: req.session.currentUser})
})

// Delete Recipe
router.delete('/:id/recipes/:recipeId', async (req, res) => {
    try {
        // set values user and recipe ids
        const userId = req.params.userId
        const recipeId = req.params.recipeId

        // find user by id
        const foundUser = await User.findById(userId)
        // find recipe embedded in user
        await foundUser.recipes.id(recipeId).deleteOne()
        // update recipe in user
        await foundUser.save()
        // find recipe and delete it
        await Recipe.findByIdAndDelete(recipeId)
        res.redirect(`/users/${userId}`)
    } catch (err) {
        console.log(err)
    }
})

// Update Recipe
router.put('/:id/recipes/:recipeId', async (req, res) => {
    try {
        // set values user and recipe ids
        const userId = req.params.userId
        const recipeId = req.params.recipeId
        // find user by id
        const user = await User.findById(userId)
        const foundRecipe = await Recipe.findById(recipeId)
        // update recipe
        foundRecipe.recipe = await req.body.recipe
        await user.save()
        //update the recipe itself
        const updatedRecipe = await Recipe.findByIdAndUpdate(recipeId, req.body, {new: true})

        if(userId !== req.session.currentUser) {
            return res.send('You are not authorized to edit this recipe')
        }
        await 

        updatedRecipe.save()
        res.redirect(`/users/${userId}`)
    } catch(err) {
        console.log(err)
    }
})

// Create User
router.post('/', async (req, res)=> {
    try {
        req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))
        const newUser = await User.create(req.body)
        res.redirect('/')
    }catch(err){
        console.log(err)
    }
})

// Create Recipe Embedded
router.post('/:id/recipes', async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        const newRecipe = await Recipe.create({recipe: req.body.recipe})
        user.recipes.push(newRecipe)
        await user.save()
    } catch (err) {
        console.log(err)
    }
})

// Show User
router.get('/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        res.render('users/show', {
            user,
            currentUser: req.session.currentUser
        })
    } catch (err) {
        console.log(err)
    }
})

// Edit User
router.get('/:id/edit', async (req, res) => {
    try {
        const userId = req.params.userId
        const recipeId = req.params.recipeId

        const foundUser = await User.findById(userId)

        const foundRecipe = foundUser.recipes.id(recipeId)
        res.render('users/edit', {
            user: foundUser,
            recipe: foundRecipe,
            userId: req.session.currentUser
        })
    } catch(err) {
        console.log(err)
    }
})
module.exports = router